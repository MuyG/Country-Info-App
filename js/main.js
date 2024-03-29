if(localStorage.getItem('travel-app-username')) document.getElementById('welcomeText').innerText = `Welcome, ${localStorage.getItem('travel-app-username')}`

//restcountries.com
class Search {
    constructor(){
        this.input = document.getElementById('searchInput').value
        this.body = document.querySelector('body')
        this.main = document.querySelector('main')
        this.panel = document.querySelector('.panel')
        this.flag = document.getElementById('flagImg')
        this.commonName = document.getElementById('commonName')
        this.officialName = document.getElementById('officialName')
        this.timezone = document.getElementById('timezone')
        this.population = document.getElementById('population')
        this.currency = document.getElementById('currency')
        this.capitalCity = document.getElementById('capitalCity')
        this.languages = document.getElementById('languages')
        this.map = document.getElementById('map')
    }

    adjustMainAndPanel = () => {
        this.main.style.height = '200px'
        this.main.style.marginTop = '50px'
        this.main.style.transform = 'translateY(-350px)'
        this.panel.style.top = '300px'
        this.panel.style.opacity = '100%'
    }

    countryName = async () => {
        const input = this.input.trim()
        const res = await fetch(`https://restcountries.com/v3.1/name/${input}`)
        const data = await res.json()
        console.log(data)
        if(data.status == 404 || input == '') {
            alert(`No country of *${input}* found please try again...`)
            this.main.style.height = '600px'
            this.main.style.marginTop = '0px'
            this.panel.style.top = '800px'
            this.panel.style.opacity = '0%'
        }
        else{
            this.adjustMainAndPanel()
            this.photo()
            this.commonName.innerText = data[0].name.common
            this.officialName.innerText = data[0].name.official
            this.timezone.innerText = `Timezone - ${data[0].timezones.join(' | ')}`
            this.population.innerText = `Population - ${data[0].population.toString()}`
            this.currency.innerText = `Currency - ${data[0].currencies[Object.keys(data[0].currencies)[0]].name}`
            this.capitalCity.innerText = `Capital City - ${data[0].capital.join(' | ')}`
            this.languages.innerText = `Languages - ${Object.keys(data[0].languages).map(x => data[0].languages[x]).join(', ')}`
            this.flag.src = data[0].flags.png
            this.map.innerHTML = `<div style="width: 100%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=${data[0].name.common}+(My%20Business%20Name)&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>`
        }
    }
    
    photo = async () => {
        const input = this.input.trim()
        const res = await fetch(`https://api.unsplash.com/search/photos/?query=${input}&color=white&client_id=U6JGLNzPlvtuyEtMocTqpgobbPViUZUlRhQ5knlqjvE`)
        const data = await res.json()
        console.log(data.results[0].urls.regular)
        this.panel.style.backgroundImage = `url('${data.results[0].urls.regular}')`
    }
}

const welcomeUser = () => {
    const username = prompt('Identify yourself! (What is your name?)')
    if(username == null) username = localStorage.getItem('travel-app-username')
    document.getElementById('welcomeText').innerText = `Welcome, ${username}`
    localStorage.setItem('travel-app-username', username)
}

document.getElementById('searchButton').addEventListener('click', _ => {
    const search = new Search
    search.countryName()
})

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        const search = new Search
        search.countryName()
    }
})

document.getElementById('userIcon').addEventListener('click', _ => welcomeUser())