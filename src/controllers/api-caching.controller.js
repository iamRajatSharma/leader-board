const redisClient = require("../config/database");

const allUsers = async (req, res) => {
    const UsersURL = "https://jsonplaceholder.typicode.com/users"
    let users = await fetch(UsersURL)
    users = await users.json()
    return res.json({
        "message": "Normal Users",
        "status": "success",
        users
    })
}


const allCachedUsers = async (req, res) => {
    let response = await redisClient.get("users")

    if (!response) {
        const UsersURL = "https://jsonplaceholder.typicode.com/users"
        let users = await fetch(UsersURL)
        users = await users.json()
        await redisClient.setEx("users", 60, JSON.stringify(users))
    }
    response = JSON.parse(await redisClient.get("users"));
    return res.json({
        "message": "Cached Users",
        "status": "success",
        response
    })
}

const deleteCachedUsers = async (req, res) => {
    let response = JSON.parse(await redisClient.get("users"));
    console.log(response)
    if (response) {
        await redisClient.DEL("users")
    }
    return res.json({
        "message": "Cached data deleted",
        "status": "success"
    })
}

module.exports = { allUsers, allCachedUsers, deleteCachedUsers }