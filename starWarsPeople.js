import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

const allHomeWorlds = people.map(person => {
    let foundWorld = planets.find(planet => {
        return planet.url === person.homeworld 
    })

    const getLastNumber = (url) => {
        let end = url.lastIndexOf('/')
        
        let start = end -2
        console.log(start + ' ' + end)
    }
    

    getLastNumber(person.url)
    return {
        name: person.name,
        home: foundWorld.name,
        eye_color: person.eye_color
    }
})
//console.log(allHomeWorlds)


//http://starwars-visualguide.com/assets/img/characters/1.jpg

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach((person) => {
    let personElement = document.createElement('div')
    let planetElement = document.createElement('p')
    personElement.className = 'box'
    personElement.textContent = person.name
    planetElement.textContent = person.home
   
   
   personElement.appendChild(planetElement)
    mainContainer.appendChild(personElement)
})



document.body.appendChild(mainContainer)