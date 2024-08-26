import React, { useState } from 'react';
import axios from "axios";

function PlayResetButtons({ onGameFinish, onResetScores }) {
    const [play, setPlay] = useState(false);
    const [reset, setReset] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [cancel, setCancel] = useState(false);

    // When the player clicks "Let's Play"
    const handlePlayClick = () => {
        setPlay(true);
        console.log("Play button clicked");
        if (onGameFinish) {
            onGameFinish();
        }
    };

    const handleResetClick = () => {
        setReset(true);
        setConfirm(true);
        setCancel(true);
    };

    const handleOkayClick = async () => {
        setPlay(false);
        setReset(false);
        setConfirm(false);
        setCancel(false);
        console.log("Okay button clicked. Scores and game will be reset.");
        if (onGameFinish) {
            onGameFinish(); // Reset the game board
        }
        if (onResetScores) {
            onResetScores(); // Reset the scores
        }

        try {
            const response = await axios.post('/api/resetscores');
            console.log('Scores have been reset:', response.data);
        } catch (error) {
            console.error('Error resetting scores:', error);
        }
    };

    const handleCancelClick = () => {
        setReset(false);
        setConfirm(false);
        setCancel(false);
    };

    return (
        <>
            <div className="row mt-3">
                <div className="col-md-9 offset-md-3 d-grid mx-auto">
                    <button type="button"
                            className="btn btn-outline-dark border-2 rounded-4 pt-3 pb-3 fs-3"
                            onClick={handlePlayClick}
                            disabled={play}>
                        Let's Play
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="container mt-3 border-2 border-black rounded-4 w-75">
                    <div className="col-md-12">
                        {!reset && (
                            <button type="button"
                                    className="btn btn-sm btn-outline-dark btn-block border-2 rounded-3 col-12 mt-3 mb-3 p-3 fs-4"
                                    onClick={handleResetClick}>
                                Reset Game Scores?
                            </button>
                        )}
                    </div>
                    {reset && (
                        <div className="col-md-12 d-flex gap-1">
                            {confirm && (
                                <button type="button"
                                        className="btn btn-sm btn-outline-dark btn-block border-2 rounded-3 col-6 mt-3 mb-3 p-3 fs-4"
                                        onClick={handleOkayClick}>
                                    Okay
                                </button>
                            )}
                            {cancel && (
                                <button type="button"
                                        className="btn btn-sm btn-outline-dark btn-block border-2 rounded-3 col-6 mt-3 mb-3 p-3 fs-4"
                                        onClick={handleCancelClick}>
                                    Cancel
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default PlayResetButtons;
