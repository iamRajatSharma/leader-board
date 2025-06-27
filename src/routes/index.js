const express = require('express')
const routes = express.Router()
const  leaderBoardRouter  = require('./leaderBoard.route')
const apiCahningRouter = require('./api-caching.route')

routes.use("/leaderBoardRouter", leaderBoardRouter)
routes.use("/api-caching", apiCahningRouter)

module.exports = routes