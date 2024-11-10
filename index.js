const express = require('express')
const pool = require('./config/db')
const dotenv = require('dotenv')
const app = express();
const userRoute = require('./route/user')
dotenv.config();
const PORT = process.env.PORT || 8000



app.use(express.json());

app.use('/api', userRoute)

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`)
})