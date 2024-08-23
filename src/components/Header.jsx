import React from 'react';

function Header() {
    return (
        <div className="row border-2 border-black rounded p-1">
            <div className="col-4">
                <div className="btn btn-white border-2 border-black fs-4 pr-5 pl-5">Home</div>
            </div>
            <div className="col-4 text-center pr-1 pt-2 fs-4">
                <h4>Brandon's Game Hub</h4>
            </div>
            <div className="col-4">
                <div className="btn btn-white border-2 border-black float-end pl-5 pr-5 fs-4">Login</div>
            </div>
        </div>
    );
}

export default Header;