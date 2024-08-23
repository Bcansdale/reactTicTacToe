import React from 'react';

function PlayerSelect(props) {
    return (
        <>
            <div className="row">
                <div className="col-md-4 offset-md-4 mb-2">
                    <h3 className="text-center border-2 border-black rounded-3 mt-3 p-2 fs-4">Players</h3>
                </div>
            </div>

            <div className="row">
                <div className="container border border-black border-2 rounded-4 w-50 pt-1 pb-1">
                    <div className="col-md-6 d-flex gap-1">
                        <button type="button"
                                className="btn btn-outline-dark btn-block border-2 rounded-4 col-12 pt-2 pb-2 fs-5">1
                        </button>
                        <button type="button"
                                className="btn btn-outline-dark btn-block border-2 rounded-4 col-12 pt-2 pb-2 fs-5">2
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default PlayerSelect;