//run npm install babel-cli@6 babel-preset-react-app@3
//https://www.loom.com/share/27c022bdb28d4398942882685b149ded

const API_URL = 'http://localhost:5000';

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planet`)
  return await response.json()
  // TODO: Once API is ready.
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};