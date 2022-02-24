// api connect get


const countryLoad = (countryDataLink) => {
    const url = `https://restcountries.com/v3.1/${countryDataLink}`;
    fetch(url)
        .then(responce => responce.json())
        .then(data => dispalyData(data))
}
window.addEventListener('load', () => {
    countryLoad('all')
})
document.getElementById('all').addEventListener('click', () => {
    countryLoad('all')
})
document.getElementById('asia').addEventListener('click', () => {
    countryLoad('region/asia')
})
document.getElementById('africa').addEventListener('click', () => {
    countryLoad('region/Africa')
})
document.getElementById('europe').addEventListener('click', () => {
    countryLoad('region/europe')
})
document.getElementById('america').addEventListener('click', () => {
    countryLoad('region/america')
})
document.getElementById('oceania').addEventListener('click', () => {
    countryLoad('region/oceania')
})


// countryLoad('region/asia')
// countryLoad('region/Africa')
// countryLoad('region/europe')
// countryLoad('region/america')
// countryLoad('region/oceania')


const dispalyData = (countys) => {
    console.log(countys)
    const singleCountry = document.getElementById('country')
    singleCountry.textContent = '';
    countys.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card border-0 shadow-lg overflow-hidden h-100">
          <img src="${country.flags.png}" class="border-bottom" alt="..." width="100%" height="150">
          <div class="card-body">
            <h3 class="card-title">${country.name.common}</h3>
            <p><span class="fw-bold"> Continents :</span> ${country.continents} </p>
            <p><span class="fw-bold"> Capital :</span> ${country.capital} </p>
            <p><span class="fw-bold"> Region :</span> ${country.subregion} </p>
            <p><span class="fw-bold"> Population :</span> ${country.population} </p>
          </div>
        </div>
      
        `
        singleCountry.appendChild(div)
        console.log(country)
    })
}