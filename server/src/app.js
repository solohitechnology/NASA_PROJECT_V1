const cors = require('cors')
const express = require('express')
const PlanetRouter = require('./routes/planet/planet.router')
const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json())
app.use(PlanetRouter)

module.exports = app;