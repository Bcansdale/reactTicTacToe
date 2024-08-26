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

    saveScores : (req, res) => {
        const {winner} = req.body;

        const scoreToUpdate = SCORE_DATA.find((score) => score.id === winner);
        if (scoreToUpdate) {
            scoreToUpdate.score++;
        }

        res.send({
            message: 'Score updated',
            score: SCORE_DATA
        });
    }
}

export default ScoreHandler;