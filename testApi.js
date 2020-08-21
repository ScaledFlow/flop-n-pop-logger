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

// Initialize Finnhub
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bt01m7n48v6ouqftkos0"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

// Stock Price
// request('https://finnhub.io/api/v1/stock/candle?symbol=TSLA&resolution=1&from=1572651390&to=1572910590&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body);
// });

// Stock Price
request('https://finnhub.io/api/v1/quote?symbol=TSLA&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
 if (err) { return console.log(err); }
 console.log(body);
});

// Forex 
// request('https://finnhub.io/api/v1/forex/symbol?exchange=oanda&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body);
// });

request('https://finnhub.io/api/v1/forex/rates?base=USD&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
 if (err) { return console.log(err); }
 console.log(body);
});

// Covid Data
request('https://finnhub.io/api/v1/covid19/us?token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
 if (err) { return console.log(err); }
 console.log(body[0]);
});