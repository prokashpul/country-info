// api connect get


const countryLoad = (countryDataLink) => {
    const url = `https://restcountries.com/v3.1/${countryDataLink}`;
    fetch(url)
        // .then((res) => {
        //     if (!res.ok) {
        //         const message = `Error ${res.status}`;
        //         throw new Error(message);
        //     }
        //     return res.json()
        // })
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(err => errorMessage(err))
}

// error show
const errorMessage = () => {
    const errorShow = document.getElementById('error-show');
    errorShow.innerHTML = `
        <div> Country name is not Found 😒 </div>
    `
}


// display button get
window.addEventListener('load', () => {
    countryLoad('all');
    // page load
    const pageLoad = document.getElementById('page-load');
    pageLoad.classList.add('hidden')
    pageLoad.style.display = "none";


    // display all country data

});
document.getElementById('all').addEventListener('click', () => {
    countryLoad('all')
});
document.getElementById('asia').addEventListener('click', () => {
    countryLoad('region/asia')
});
document.getElementById('africa').addEventListener('click', () => {
    countryLoad('region/Africa')
});
document.getElementById('europe').addEventListener('click', () => {
    countryLoad('region/europe')
});
document.getElementById('america').addEventListener('click', () => {
    countryLoad('region/america')
});
document.getElementById('oceania').addEventListener('click', () => {
    countryLoad('region/oceania')
});
document.getElementById('search-btn').addEventListener('click', () => {
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    input.value = '';
    if (inputValue)
        countryLoad("name/" + inputValue);

});

const displayData = (counteys) => {
    // console.log(counteys)
    const singleCountry = document.getElementById('country')
    singleCountry.textContent = '';
    // error sms hide
    const errorShow = document.getElementById('error-show');
    errorShow.textContent = "";

    // forEach loop use
    counteys.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card border-0 shadow-lg overflow-hidden h-100" onclick="singleCountry('${country.name.common}')">
        <div class="row ms-2 mt-3">
        <div class="col-4">
        <img src="${country.flags.png}" class="border-bottom" alt="..." width="100%" >
        </div>
        <div class="col-8">
        <h4 class="card-title">${country.name.common} (${country.flag}) </h4>
        </div>
        </div>
          
          <div class="card-body">
            
            <div><span class="fw-bold"> Continents :</span> ${country.continents} </div>
            <div><span class="fw-bold"> Capital :</span> ${country.capital} </div>
            <div><span class="fw-bold"> Region :</span> ${country.subregion} </div>
            <div><span class="fw-bold"> Population :</span> ${country.population} </div>
          </div>
        </div>
      
        `
        singleCountry.appendChild(div)
    })
}

// single countryDetails
const singleCountry = (countryName) => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => singleCountryDisplay(data))
        .catch(err => console.log(err))
}

const singleCountryDisplay = (singleCountry) => {
    console.log(singleCountry[0]);
    const singleCountryView = document.getElementById('single-country');
    singleCountryView.style.visibility = "visible";
    singleCountryView.innerHTML = `
        <div class="card text-light"  data-bs-spy="scroll" data-bs-offset="0" tabindex="0">
          <div class="d-flex justify-content-between m-2">
          <a href="${singleCountry[0].maps.openStreetMaps}" class=" btn btn-info text-light fw-bold">Map</a>
          <button type="button" class="btn-close"
            aria-label="Close" onclick="closeButton()"></button></div>
            <div class="row g-0">
            <div class="col-md-6 bg-info">
                <img src="${singleCountry[0].flags.png}" class="img-fluid rounded-start h-100 w-100" alt="...">
                </div>
                    <div class="col-md-3 bg-info">
                     <div class="card-body">
                          <h4 class="card-title"><span class="fw-bold text-danger">Country:</span> ${singleCountry[0].name.common} (${singleCountry[0].flag})</h4>
                          <div class="card-text"><span class="fw-bold text-danger"> Capital: </span>${singleCountry[0].capital}</div>
                          <div class="card-text"><span class="fw-bold text-danger"> Currencies: </span>${currencies()}</div>
                          <div class="card-text"><span class="fw-bold text-danger"> Language: </span>${languages()}</div>
                          
                          <div class="card-text"><span class="fw-bold text-danger"> Area: </span>${singleCountry[0].area} KM<sup>2</sup></div>
                          <div class="card-text"><span class="fw-bold text-danger"> Population: </span>${singleCountry[0].population}</div>
                       </div>
                     </div>
                    <div class="col-md-3 bg-info">
                     <div class="card-body">
                     <div class="card-text"><span class="fw-bold text-danger"> Region: </span>${singleCountry[0].region}</div>
                          <div class="card-text"><span class="fw-bold text-danger"> Subregion: </span>${singleCountry[0].subregion}</div> 
                        <div class="card-text"></div>
                       </div>
                     </div>
                </div>
            </div>
    `
    // 
    function currencies() {
        for (let i in singleCountry[0].currencies) {
            const name = singleCountry[0].currencies[i].name;
            const symbol = singleCountry[0].currencies[i].symbol;
            return `${name} (${symbol})`;

        }
    }
    // languages
    function languages() {
        for (const i in singleCountry[0].languages) {
            return singleCountry[0].languages[i]
        }
    }

}
const closeButton = () => {
    const singleCountryView = document.getElementById('single-country');
    singleCountryView.style.visibility = "hidden";
}