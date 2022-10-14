import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';

const searchCountry = document.querySelector('#search-box');
const allCountries = document.querySelector('.country-list');
const infoCountry = document.querySelector('.country-info');

searchCountry.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

const DEBOUNCE_DELAY = 300;


function markupAllCountries(data) {
    return data.map(country => {
        return `<li class="country-items">
  <img src="${country.flag.svg}" alt="Flag" width = 20, height = 15></img>
  ${country.name.official}
</li>`;
    }).join('');
}

function markupOneCountry(data) {
    return data.map(country => {
        return `<img src="${country.flag.svg}" alt="Flag" width = 20, height = 15></img>
  <h1 class="country-info-title"${country.name.official}></h1>
  <p class="country-info-items">Capital:<span>${country.capital}</span></p>
  <p class="country-info-items">Population:<span>${country.population}</span></p>
  <p class="country-info-items">Languages:<span>${country.languages}</span></p>`
    }).join('');
}

function renderMarkup(data) {
    if (data.length === 1) {
        allCountries.insertAdjacentHTML('beforeend', markupOneCountry(data));
    } else if (data.length > 1 && data.length <= 10) {
        infoCountry.insertAdjacentHTML('beforeend', markupAllCountries(data));
    }  else if (data.length > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.");
    }
}

    

function onInputSearch(e) {
    e.preventDefault();
}

