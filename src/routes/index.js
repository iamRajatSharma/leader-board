const Router = require('express')
const router = Router()
const { addPlayer } = require('../controllers/leaderBoard.controller')

router.post('/', addPlayer);

module.exports = router