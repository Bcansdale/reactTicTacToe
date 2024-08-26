const SCORE_DATA = [
    {id: 'X', score: 0},
    {id: 'O', score: 0},
    {id: 'tie', score: 0}
];


const ScoreHandler = {
    getScores : (req, res) => {
        res.send({
            message : 'Score of game',
            score: SCORE_DATA
        })
    },

    addScores : (req, res) => {

    }


}

export default ScoreHandler;