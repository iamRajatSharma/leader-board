const redisClient = require("../config/database");

const addPlayer = async (req, res) => {
    const { name, score } = req.body;

    // add data in redis
    await redisClient.zAdd("leaderboard", {
        score: parseInt(score),
        value: name
    });

    return res.json({
        "message": "Player added successfully",
        "status": "success",
        data: req.body
    });
}


const getTopPlayers = async (req, res) => {

    const { size } = req.params

    const response = await redisClient.zRange("leaderboard", 0, size - 1, "WITHSCORES")

    return res.json({
        "message": "Top users fetched successfully",
        "status": "success",
        size: response
    })
}


const getPlayerRank = async (req, res) => {
    const { name } = req.params

    const playerRank = await redisClient.zRank("leaderboard", name)

    return res.json({
        "message": "User details fetched successfully",
        "status": "success",
        name,
        rank: playerRank + 1
    })
}


const getPlayerScore = async (req, res) => {
    const { name } = req.params
    const playerScore = await redisClient.zScore("leaderboard", name)

    return res.json({
        "message": "User score fetched successfully",
        "status": "success",
        name: name,
        rank: playerScore
    })

}

module.exports = {
    addPlayer,
    getTopPlayers,
    getPlayerRank,
    getPlayerScore
}