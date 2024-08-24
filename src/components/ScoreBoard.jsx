import React from 'react';
import {useState} from "react"; // Import useState to set an initial value
import CheckWinner from "./GameLogic/CheckWinner.jsx";

// This function will increment the score of each player via 'x', 'o', or a 'tie' game
// All react components must be capitalized
function ScoreBoard() {
// Declare an array of destructured variables [scores, setScores]
// setScore is used to update score without changing the initial value
    const [scores, setScores] = useState({
        x: 0, // x starts at 0
        o: 0, // o starts at 0
        tie: 0, // tie starts at 0
    });
        // handleScore passes in 2 arguments 'player' and 'score'
    const handleScore = (player, score) => {
        // setScore state will check for new variable called prevScore using the spread operator
        // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
        // player argument [x], [o], [tie] is called to create a new object: prevScore[of a player] + 1 to score
        setScores((prevScore) => ({...prevScore, [player]:prevScore[player] + score}))

    }
    // console.log(`SCORE X`, scores.x)
    // console.log(`SCORE TIE`, scores.tie)
    // console.log(`SCORE O`, scores.o)
    return (
        <>
            {/* HTML and BootStrap to style the ScoreBoard*/}
            <div className="row mt-1 mb-3">
                <div className="col-12 d-flex justify-content-center fs-5">
                    {/* Label */}
                    Tie
                </div>
                <div className="col-8 offset-2 d-flex gap-2 mb-5">
                    {/* Pass in the returned score from useState of {scores.[player]}*/}
                    <div className="border-2 border-dark rounded-3 p-2 col-5"><span
                        className="badge text-bg-white text-dark float-start fs-5">X</span> <span
                        className="badge text-bg-white text-dark float-end fs-5">{scores.x}</span></div>
                    <div className="border-2 border-dark rounded p-2 col-2 text-center"><span
                        className="badge text-bg-white text-dark fs-5">{scores.tie}</span></div>
                    <div className="border-2 border-dark rounded p-2 col-5"><span
                        className="badge text-bg-white text-dark float-start fs-5">O</span> <span
                        className="badge text-bg-white text-dark float-end fs-5">{scores.o}</span></div>
                </div>
            </div>
            {/* Test Buttons to check if working*/}
            <button className='col-4 mb-1' onClick={() => handleScore('x', 1)}>Add X score</button>
            <button className='col-4 mb-1' onClick={() => handleScore('tie', 1)}>Add Tie score</button>
            <button className='col-4 mb-1' onClick={() => handleScore('o', 1)}>Add O score</button>
        </>
    );
}

export default ScoreBoard;