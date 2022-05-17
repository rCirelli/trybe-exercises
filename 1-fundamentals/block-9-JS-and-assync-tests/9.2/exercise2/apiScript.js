// const fetch = require('node-fetch');

const CRYPTO_API_URL = 'https://api.coincap.io/v2/assets';
const CURRENCY_BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
const CURRENCY_ENDPOINT = '/currencies/usd.min.json'

function fetchCryptos() {
  fetch(CRYPTO_API_URL)
    .then((response) => response.json())
    .then(({data}) => appendLi(data))
    .catch((error) => console.error(error))
}

async function fetchCurrencyRates() {
  const response = await fetch(`${CURRENCY_BASE_URL}${CURRENCY_ENDPOINT}`);
  const data = await response.json();
  const value = data.usd;
  return value;
}

async function getCurrencyRate(promise, tgtCurrency) {
  const result = await promise.then((value) => value[tgtCurrency]);
  return result;
}

async function appendLi(cryptoArr) {
  const brlRate = await getCurrencyRate(fetchCurrencyRates(), 'brl');
  const cryptoList = document.getElementById('cryptos-list');
  cryptoArr.map(({ name, symbol, priceUsd }, index) => {
    if (index < 10) {
      const newLi = document.createElement('li');
      const USD_BRL = priceUsd * brlRate;
      newLi.innerHTML = `<h3>${name} (${symbol}) - 
        USD: ${Math.round(priceUsd).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} | 
        BRL: ${USD_BRL.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' })}</h3>`;
      cryptoList.appendChild(newLi);
    }
  });
}

window.onload = fetchCryptos();