const Router = require('express')
const leaderBoardRouter = Router()
const { addPlayer, getTopPlayers, getPlayerRank, getPlayerScore } = require('../controllers/leaderBoard.controller')

leaderBoardRouter.post('/', addPlayer);
leaderBoardRouter.get('/top/:size', getTopPlayers);
leaderBoardRouter.get('/name/:name', getPlayerRank);
leaderBoardRouter.get('/score/:name', getPlayerScore);

module.exports = leaderBoardRouter