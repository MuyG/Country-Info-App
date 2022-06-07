# The Country Info Travel Guide!
This web application takes in any country in the world and gives you basic information about it. Are you interested in travelling? Find the prominant languages, currency, timezone, and much more using this stylish web app.

**Link to project:** https://shilohscountryinfo.netlify.app/

![Country App Screenshot](https://imgur.com/SCBu5XM.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, OOP, REST Countries API, Google Maps API, Unsplash API

A simple card-like design inspired from a canva template. The gif behind the search bar is also from canva. The Javascript is fairly simple, it takes in a request from the search bar, sends that request to the REST Countries API and formats the data onto the DOM. The country name also gets sent to the Google Maps API to display the map at the bottom and the Unsplash API to get you a nice picture for the background.

## Optimizations
*(optional)*

One optimization I made was adding a error catch for the country name. Originally, whether a proper country was entered or not, the country panel would show up and just display filler text/photos. It did not look good. So I added an if statement to catch the 404 or catch if the input was blank and display a message to please re-enter the countries name. 

I am putting this project to bed for now, but something I thought would be nice to add, is to allow for different searches. I would do this by having a dropdown next to the search bar where they could choose from "search by; country, language, currency, capital, etc." And I would display up to 5 random countries based on their search.

## Lessons Learned:

This is one of my first times really working with an API and I had a blast. I learned how to properly use Async/Await functions to make fetch requests and other things. I applied for APIs and read documentation to learn how to use them. One of my favorite projects to date, many more to come!

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Bob Ross Typing Test:** https://github.com/MuyG/BobRossTypingTest

**Shilohr Portfolio:** https://github.com/MuyG/Shilohr

**Lucciola:** https://github.com/MuyG/Lucciola---Italian-Restaurant



