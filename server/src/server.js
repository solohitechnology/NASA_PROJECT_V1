const http = require('http')
const app = require('./app')
const { loadPlanetData } = require('./models/planet.module')
const PORT = process.env.PORT || 8000;
const server = http.createServer(app)

async function startServer() {
    await loadPlanetData()
    server.listen(PORT, () => console.log(`server running on port ${PORT}`))
}

startServer()