import React, { useState } from 'react';
import CheckWinner from "./GameLogic/CheckWinner.jsx";
import PlayerSelect from "./PlayerSelect.jsx";
import ScoreHandler from "../../server/scoreHandler.js";
import axios from "axios";

function GameBoard({board, setBoard, currentPlayer, setCurrentPlayer, winner, setWinner, scores, setScores, onGameFinish, onResetScores}) {
    // const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 grid, initially empty
    // const [currentPlayer, setCurrentPlayer] = useState('X'); // 'X' or 'O'
    // const [winner, setWinner] = useState(null); // Store the winner ('X', 'O', or 'Draw')

    // Handle a player clicking a cell
    const handleCellClick = (index) => {
        // If the cell is already filled or the game is over, do nothing
        if (board[index] || winner) return;

        // Update the board with the current player's move
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        // Check for a winner
        const winnerResult = CheckWinner(newBoard);
        if (winnerResult) {
            setWinner(winnerResult);
            setScores((prevScores) => ({
                ...prevScores,
                [winnerResult]: prevScores[winnerResult]
            }));
            saveScoreToServer(winnerResult)
        } else {
            // Switch to the next player
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const saveScoreToServer = async (winner) => {
        try {
            const response = await axios.post('/api/updatescores', {winner});
            console.log('Server response:', response.data);
        } catch (error) {
            console.log('Error saving score:', error)
        }
    }

    // // Reset the game board
    // const resetGame = () => {
    //     setBoard(Array(9).fill(null));
    //     setCurrentPlayer('X');
    //     setWinner(null);
    // };


    return (
        <div className="container mt-4">
            {/* Display Winner or Current Player */}
            <div className="row mt-4">
                <div className="col-12 text-center fs-2">
                    {winner ? (
                        <button type='button' className='btn btn-lg col-12 fs-3'
                                onClick={onGameFinish}>
                            {winner === 'tie' ? 'It\'s a Tie!...  Reset?' : `Player ${winner} Wins!...  Reset?`}
                        </button>
                    ) : (
                        <h2>Current Player: {currentPlayer}</h2>
                    )}
                </div>
            </div>

            {/* Game Grid */}
            <div className="row justify-content-center mt-4">
                <div className="col-10">
                    <div className="d-flex flex-wrap">
                        {board.map((value, index) => (
                            <div
                                key={index}
                                className="col-4 border-2 border-dark d-flex align-items-center justify-content-center"
                                style={{height: '100px', cursor: 'pointer'}}
                                onClick={() => handleCellClick(index)}
                            >
                                <span className="fs-1">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* ScoreBoard */}
            {/*<ScoreBoard winner={winner}/>*/}
        </div>
    );
}

export default GameBoard;
