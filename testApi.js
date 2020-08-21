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
// console.log(body);
});

// Forex
request('https://finnhub.io/api/v1/forex/rates?base=USD&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
 if (err) { return console.log(err); }
// console.log(body);
});

// Support Resistance
request('https://finnhub.io/api/v1/scan/support-resistance?symbol=TSLA&resolution=D&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
//  console.log(body);
});

// Pattern Recognition
request('https://finnhub.io/api/v1/scan/pattern?symbol=TSLA&resolution=D&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.points[0].atime);
});

// MACD
request('https://finnhub.io/api/v1/scan/technical-indicator?symbol=TSLA&resolution=D&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});

// Covid Data
request('https://finnhub.io/api/v1/covid19/us?token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
 if (err) { return console.log(err); }
// console.log(body[0]);
});

// Convert Unix Time Stamp
let unix_timestamp = 1595462400
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log("unix convertion: " + formattedTime);


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  console.log(timeConverter(1595462400));