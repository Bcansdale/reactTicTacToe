import "./App.css";
import Header from "./components/Header.jsx";
import Title from "./components/Title.jsx";
import PlayerSelect from "./components/PlayerSelect.jsx";
import PlayResetButtons from "./components/PlayResetButtons.jsx";
import GameBoard from "./components/GameBoard.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import DevMountain from "./assets/devMountain-logo.png"



function App() {
    return (
        <>
            <div className="container mx-auto mt-5 border-2 border-black rounded-4">
                <div className="container mt-2">
                    {/* Header */}
                    <Header/>
                    {/* Title of Game Tic-Tac-Toe*/}
                    <Title/>
                    <div className="row">
                        <div className="col-md-6 border-end border-dark">
                            {/* Player Selection */}
                            <PlayerSelect/>
                            {/* Reset the Game*/}
                            <PlayResetButtons/>
                        </div>
                        <div className="col-md-6 border-start border-dark">
                            {/* This is the GameBoard*/}
                            <GameBoard/>
                            {/*This is the ScoreBoard*/}
                            <ScoreBoard/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <h3>Designed By: Brandon Cansdale</h3>
            </div>
            <img className='rounded mx-auto img-fluid mt-5' src={DevMountain} alt="Dev Mountain Logo" width='90'/>
        </>
    );
}

export default App;
