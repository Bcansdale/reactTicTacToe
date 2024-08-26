import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import scoreHandler from './scoreHandler.js'

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json())


app.get('/api/scores', scoreHandler.getScores)
app.post('/api/updatescores', scoreHandler.saveScores)
app.post('/api/resetscores', scoreHandler.resetScores);


ViteExpress.config({ printViteDevServerHost: true });
ViteExpress.listen(app, 5539, () => console.log("http://localhost:5539"))