const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.use('/users', userRoutes)

module.exports = app;