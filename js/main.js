//restcountries.com
class Search {
    constructor(){
        this.input = document.getElementById('searchInput').value
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

    adjustMain = () => {
        this.main.style.height = '200px'
        this.main.style.marginTop = '50px'
        this.panel.style.display = 'block'
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
            this.panel.style.display = 'none'
        }
        else{
            this.adjustMain()
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
    
    photo = async (search) => {
        const res = await fetch(`https://serpapi.com/playground?q=${search}&tbm=isch&ijn=0&api_key=0c8d52481e0ab22a804a317ae03c2585e7802740743e3a430a46692c08aa5df4`)
        const data = await res.json()
        console.log(data)
    }
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