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
