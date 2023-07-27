import ironMan from './assets/iron-man.png'
import generateJoke from './generateJoke'
import './styles/main.scss'

// const randomImg = document.getElementById('random-img')
// randomImg.src = ironMan
const jokeContainer = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', async () => {
  jokeContainer.textContent = 'Loading...'
  const joke = await generateJoke()
  jokeContainer.textContent = joke
})
