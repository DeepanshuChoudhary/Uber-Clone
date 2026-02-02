const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.use('/users', userRoutes)
app.use('/captain', captainRoutes);
app.use('/maps', mapsRoutes)

module.exports = app;