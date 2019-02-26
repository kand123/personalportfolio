import { films } from './films.js'

films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1)

const intro = document.querySelector('.intro')

films.forEach ((film) => {
    let tile = document.createElement ('div')
    
    let titleElement = document.createElement('h1')
    let crawlElement = document.createElement('h3')

    titleElement.textContent = film.title
    crawlElement.textContent = film.opening_crawl

    tile.appendChild(titleElement)
    tile.appendChild(crawlElement)
    intro.appendChild(tile)
})

// let titleElement = document.querySelector('.title')
// let crawlElement = document.querySelector('.crawl')


// titleElement.textContent = films[0].title
// crawlElement.textContent = films[0].opening_crawl