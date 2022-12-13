
const { planets } = require('../../models/planet.module')

  async function getAllPlanet(req,res){
     await res.status(200).json(planets)
   }
  
 module.exports = {
    getAllPlanet,
 }