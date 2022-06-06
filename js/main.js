//restcountries.com
class Search {
    constructor(){
        this.input = document.getElementById('searchInput').value
        this.flag = document.getElementById('flagImg')
        this.commonName = document.getElementById('commonName')
        this.officialName = document.getElementById('officialName')
        this.timezone = document.getElementById('timezone')
        this.population = document.getElementById('population')
        this.currency = document.getElementById('currency')
        this.capitalCity = document.getElementById('capitalCity')
        this.languages = document.getElementById('languages')
    }

    adjustMain = () => {
        document.querySelector('main').style.height = '200px'
    }

    countryName = async () => {
        const res = await fetch(`https://restcountries.com/v3.1/name/${this.input}`)
        const data = await res.json()
        this.photo(data[0].name.common)
        console.log(data)
        this.commonName.innerText = data[0].name.common
        this.officialName.innerText = data[0].name.official
        this.timezone.innerText = `Timezone - ${data[0].timezones.join(' | ')}`
        this.population.innerText = `Population - ${data[0].population.toString()}`
        this.currency.innerText = `Currency - ${data[0].currencies[Object.keys(data[0].currencies)[0]].name}`
        this.capitalCity.innerText = `Capital City - ${data[0].capital.join(' | ')}`
        this.languages.innerText = `Languages - ${Object.keys(data[0].languages).map(x => data[0].languages[x]).join(', ')}`
        this.flag.src = data[0].flags.png
    }
    
    photo = async (search) => {
        const res = await fetch(`https://serpapi.com/playground?q=${search}&tbm=isch&ijn=0`)
        const data = await res.json()
        console.log(data)
    }
}

document.getElementById('searchButton').addEventListener('click', _ => {
    const search = new Search
    search.countryName()
    search.adjustMain()
})