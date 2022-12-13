const express = require('express');
const { getAllPlanet } = require('./planet.controller')

const PlanetRouter = express.Router();

PlanetRouter.get('/planets', getAllPlanet);

// console.log(getAllPlanet)

module.exports = PlanetRouter
