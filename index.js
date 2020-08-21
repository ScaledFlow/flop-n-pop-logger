// NPM 
 const finnhub = require("finnhub");
 const request = require("request");
 const price = require('crypto-price');

// BTC Price
price.getCryptoPrice("USD", "BTC").then(obj => { // Base for ex - USD, Crypto for ex - BTC 
  console.log("BTC Price: " + obj.price)
}).catch(err => {
  console.log(err)
})

// ETH Price
price.getCryptoPrice("USD", "ETH").then(obj => { // Base for ex - USD, Crypto for ex - ETH 
  console.log("ETH Price: = " + obj.price)
}).catch(err => {
  console.log(err)
})

// // Initialize Finnhub
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bt01m7n48v6ouqftkos0"; // Replace this
const finnhubClient = new finnhub.DefaultApi();


request('https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1572651390&to=1572910590&token=brvkn6nrh5rd378r3l5g', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});
