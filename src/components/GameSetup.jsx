import React, { useState } from 'react';
import PlayerSelect from "./PlayerSelect.jsx";

function GameSetup() {
    const [selectedPlayer, setSelectedPlayer] = useState(1); // Initializes the state
    console.log('setSelectedPlayer function:', setSelectedPlayer);

    return (
        <div>
            <PlayerSelect selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/>
        </div>
    );
}

export default GameSetup;
