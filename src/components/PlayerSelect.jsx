import React, { useState } from 'react';

// PlayerSelect Function to choose single player against AI or Double Player PvP
function PlayerSelect() {
    const players = [
        { id: 1, name: 'Single Player' },
        { id: 2, name: 'Double Player' }
    ];

    // useState function setting default to single player
    const [selectedPlayer, setSelectedPlayer] = useState(players[0].id);

    // Handle the selection with an arrow function that sets the new state using setSelectedPlayer
    const handlePlayerSelect = (playerId) => {
        setSelectedPlayer(playerId);
    };

    return (
        <>
            {/* Button Title */}
            <div className="row">
                <div className="col-md-4 offset-md-4 mb-2">
                    <h3 className="text-center border-2 border-black rounded-3 mt-3 p-2 fs-4">Players</h3>
                </div>
            </div>
            {/* Player select buttons */}
            <div className="row">
                <div className="container border border-black border-2 rounded-4 w-50 pt-1 pb-1">
                    <div className="col-md-6 d-flex gap-1">
                        {players.map((player) => (
                            <button
                                key={player.id}
                                type="button"
                                className={`btn btn-outline-dark btn-block border-2 rounded-4 col-12 pt-2 pb-2 fs-5 ${
                                    selectedPlayer === player.id ? 'bg-black text-white' : ''
                                } hover:bg-black hover:text-white transition duration-500 ease-in-out`}
                                onClick={() => handlePlayerSelect(player.id)}
                            >
                                {player.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlayerSelect;
