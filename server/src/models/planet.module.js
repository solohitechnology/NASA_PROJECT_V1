const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');


let habitablePlanets = [];

  const isHabitablePlanet = function(planet) {
        return planet['koi_disposition'] === 'CONFIRMED'
          && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
          && planet['koi_prad'] < 1.6;
      }
      
      function loadPlanetData(){
      return new Promise((resolve,rejects) =>{

       fs.createReadStream(path.join(__dirname, '..', '..', 'data','kepler_data.csv'))
        .pipe(parse({
          comment: '#',
          columns: true,
        }))
        .on('data', (data) => {
          if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
            
          }
        })
        .on('error', (err) => {
          console.log(err);
          rejects(err)
        })
        .on('end', () => {
          console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name'];
          }));
          console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve()
       

      });  

    }) 
    
    }
   //console.log(loadPlanetData.data)

  module.exports= {
    loadPlanetData,
    planets:habitablePlanets
   
  };

  // 



  