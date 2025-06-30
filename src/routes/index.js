const express = require('express')
const routes = express.Router()
const  leaderBoardRouter  = require('./leaderBoard.route')
const apiCahningRouter = require('./api-caching.route')
const pubSubRouter = require('./publisher.route')

routes.use("/leaderBoardRouter", leaderBoardRouter)
routes.use("/api-caching", apiCahningRouter)
routes.use("/pub-sub", pubSubRouter)

module.exports = routes