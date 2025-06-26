const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const redisClient = require('./config/database');
const leaderBoardRoutes = require('./routes/leaderBoard.route');

app.use(express.json());
app.use("/api", leaderBoardRoutes);

// Sample route
app.get('/', (req, res) => {
    res.sendFile('Welcome to the Leader Board API');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});