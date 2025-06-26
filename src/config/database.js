const { createClient } = require("redis")

const redisClient = createClient()
redisClient.on("error", (err) => {
    console.error("Redis Client Error", err);
});

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log("Connected to Redis");
    } catch (error) {
        console.error("Error connecting to Redis:", error);
    }
};

connectRedis();

module.exports = redisClient;