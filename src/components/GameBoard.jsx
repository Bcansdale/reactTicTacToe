import React from 'react';

function GameBoard(props) {
    return (
        <>
            <div className="row mt-4">
                <div className="col-8 offset-2 d-flex justify-content-center">
                    <div id="grid">
                        <div className="row">
                            <div className="border-dark border-end border-bottom w-25 h-25 p-5"></div>
                            <div
                                className="border-dark border-start border-end border-bottom w-25 h-25 p-5"></div>
                            <div className="border-dark border-start border-bottom w-25 h-25 p-5"></div>
                        </div>
                        <div className="row">
                            <div className="border-dark border-top border-end border-bottom w-25 h-25 p-5"></div>
                            <div
                                className="border-dark border-top border-start border-end border-bottom w-25 h-25 p-5"></div>
                            <div className="border-dark border-top border-start border-bottom w-25 h-25 p-5"></div>
                        </div>
                        <div className="row">
                            <div className="border-dark border-top border-end w-25 h-25 p-5"></div>
                            <div className="border-dark border-top border-start border-end w-25 h-25 p-5"></div>
                            <div className="border-dark border-top border-start w-25 h-25 p-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameBoard;