import "./App.css";
import Header from "./components/Header.jsx";
import Title from "./components/Title.jsx";
import PlayResetButtons from "./components/PlayResetButtons.jsx";
import GameBoard from "./components/GameBoard.jsx";
import DevMountain from "./assets/devMountain-logo.png"
// import GameSetup from "./components/GameSetup.jsx";
import PlayerSelect from "./components/PlayerSelect.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import {useEffect, useState} from "react";


console.log(PlayerSelect)
function App() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [scores, setScores] = useState({
        x: 0,
        o: 0,
        tie: 0
    });

    useEffect(() => {
        fetchScores();
    }, []);

    const fetchScores = async () => {
        const response = await fetch('/api/scores');
        const data = await response.json();
        setScores({
            x:data.score.find(score => score.id === 'X').score,
            o:data.score.find(score => score.id === 'O').score,
            tie:data.score.find(score => score.id === 'tie').score
        })
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        setWinner(null);
    };

    const resetScore = () => {
      setScores({
          x: 0,
          o: 0,
          tie: 0
      });
      resetGame();
    };


    return (
        <>
            <div className="container mx-auto mt-3 border-2 border-black rounded-4">
                <div className="container mt-2">
                    <Header/>
                    <Title/>
                    <div className="row">
                        <div className="col-md-6 border-end border-dark">
                            <PlayerSelect/>
                            <PlayResetButtons
                                onGameFinish={resetGame}
                                onResetScores={resetScore}
                            />
                        </div>
                        <div className="col-md-6 border-start border-dark">
                            <GameBoard
                                onGameFinish={resetGame}
                                onResetScores={resetScore}
                                board={board}
                                setBoard={setBoard}
                                currentPlayer={currentPlayer}
                                setCurrentPlayer={setCurrentPlayer}
                                winner={winner}
                                setWinner={setWinner}
                                scores={scores}
                                setScores={setScores}
                            />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <ScoreBoard
                                scores={scores}
                                setScores={setScores}
                                winner={winner}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                <h3>Designed By: Brandon Cansdale</h3>
            </div>
            <img className="rounded mx-auto img-fluid mt-2" src={DevMountain} alt="Dev Mountain Logo" width='90'/>
        </>
    );
}

export default App;
