const Router = require('express')
const router = Router()
const { addPlayer, getTopPlayers, getPlayerRank, getPlayerScore } = require('../controllers/leaderBoard.controller')

router.post('/', addPlayer);
router.get('/top/:size', getTopPlayers);
router.get('/name/:name', getPlayerRank);
router.get('/score/:name', getPlayerScore);

module.exports = router