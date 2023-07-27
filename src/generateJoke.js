import axios from 'axios'

async function generateJoke() {
  const res = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
  return res.data.joke
}

export default generateJoke
