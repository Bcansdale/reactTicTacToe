import React from 'react';
import {useState, useEffect} from "react";

function handleHomeClick(res, req) {
    fetch('/api/scores')

}

function Header({home, login}) {
    return (
        <div className="row border-2 border-black rounded p-1">
            <div className="col-4">
                <div className="btn btn-white border-2 border-black fs-4 pr-5 pl-5
                    hover:bg-black hover:text-white
                    transition duration-500 ease-in-out">
                    {/* Home Button just for styling*/}
                    {/* Functionality would return to a homepage*/}
                    <button onClick={home}>Home</button>
                </div>
            </div>
            <div className="col-4 text-center pr-1 pt-2 fs-4">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h4>Brandon's Game Hub</h4>
            </div>
            <div className="col-4">
                <div className="btn btn-white border-2 border-black float-end pl-5 pr-5 fs-4
                hover:bg-black hover:text-white
                transition duration-500 ease-in-out">
                    {/* Login Button just for styling*/}
                    {/* Functionality would return to a login page*/}
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Header;