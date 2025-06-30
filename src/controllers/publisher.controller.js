const redisClient = require("../config/database")

const publisherController = async (req, res) => {
    const { topic } = req.params
    const { message } = req.body
    await redisClient.publish(topic, message)
    const response = `Channel is : ${topic} && Message is : ${message}`
    return res.json({ response })
}

module.exports = {
    publisherController
}