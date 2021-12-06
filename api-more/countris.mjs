import fetch from "node-fetch";

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
};
loadCountries();

const displayCountries = (countries) => {
    const countryList = document.getElementById('countries'); 
    for( const country of countries){
        console.log(`${country.name.official} - ${country.name.common}`);
        countryList.innerHTML = `
        <div>
            <h2>${country.name.common}</h2>
            <button>Details</button>
        </div>
        `  
    }
}
