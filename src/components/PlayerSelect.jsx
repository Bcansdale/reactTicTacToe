import React from 'react';

function PlayerSelect({ selectedPlayer, setSelectedPlayer }) {
    const players = [
        { id: 1, name: 'Single Player' },
        { id: 2, name: 'Double Player' }
    ];

    const handlePlayerSelect = (playerId) => {
        setSelectedPlayer(playerId); // This should correctly reference the prop
    };
    console.log('Received setSelectedPlayer:', setSelectedPlayer);

    return (
        <>
            <div className="row">
                <div className="col-md-4 offset-md-4 mb-2">
                    <h3 className="text-center border-2 border-black rounded-3 mt-3 p-2 fs-4">Player Selection</h3>
                </div>
            </div>
            <div className="row">
                <div className="container-lg border border-black border-2 rounded-4 w-50 pt-1 pb-1">
                    <div className="col-sm-12 d-flex justify-content-between">
                        {players.map(player => (
                            <button
                                key={player.id}
                                type="button"
                                className={`btn btn-outline-dark border-2 rounded-4 m-1 flex-grow-1 pt-2 pb-2 fs-5
                                    ${selectedPlayer === player.id ? 'bg-black text-white' : ''}
                                    hover:bg-black hover:text-white transition duration-500 ease-in-out`}
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
