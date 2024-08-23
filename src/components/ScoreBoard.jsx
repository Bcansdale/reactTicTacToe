import React from 'react';

function ScoreBoard() {
    return (
        <>
            <div className="row mt-1 mb-3">
                <div className="col-12 d-flex justify-content-center fs-5">
                    Tie
                </div>
                <div className="col-8 offset-2 d-flex gap-2 mb-5">
                    <div className="border-2 border-dark rounded-3 p-2 col-5"><span
                        className="badge text-bg-white text-dark float-start fs-5">X</span> <span
                        className="badge text-bg-white text-dark float-end fs-5">4</span></div>
                    <div className="border-2 border-dark rounded p-2 col-2 text-center"><span
                        className="badge text-bg-white text-dark fs-5">1</span></div>
                    <div className="border-2 border-dark rounded p-2 col-5"><span
                        className="badge text-bg-white text-dark float-start fs-5">O</span> <span
                        className="badge text-bg-white text-dark float-end fs-5">2</span></div>
                </div>
            </div>
        </>
    );
}

export default ScoreBoard;