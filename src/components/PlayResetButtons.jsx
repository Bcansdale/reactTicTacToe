import React from 'react';

function PlayResetButtons(props) {
    return (
        <>
            {/* This is the PlayButton*/}
            <div className="row mt-3">
                <div className="col-md-9 offset-md-3 d-grid mx-auto">
                    <button type="button"
                            className="btn btn-outline-dark border-2 rounded-4 pt-4 pb-4 fs-3">Let's Play
                    </button>
                </div>
            </div>
            {/* This is the the ResetButton*/}
            <div className="row">
                <div className='container mt-3 border-2 border-black rounded-4 w-75'>
                    <div className="col-md-12">
                        <h5 className="text-center border-2 border-black rounded-3 mt-3 mb-2 p-2 fs-5">Reset All
                                                                                                       Scores?</h5>
                    </div>
                    <div className="col-md-12  d-flex gap-1 mb-3">
                        <button type="button"
                                className="btn btn-sm btn-outline-dark btn-block border-2 rounded-3 col-6 p-2 fs-5">Okay
                        </button>
                        <button type="button"
                                className="btn btn-sm btn-outline-dark btn-block border-2 rounded-3 col-6 p-2 fs-5">Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlayResetButtons;