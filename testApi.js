// NPM 
const finnhub = require("finnhub");
const request = require("request");
const price = require('crypto-price');

var ts = Math.round(new Date().getTime() / 1000);
var tsc = (ts - 86000);
let tsMinusOne = (ts - 86000);

 var testUnixStart = tsc;
 var testUnixEnd = ts;

 console.log("current unix time: " + timeConverter(testUnixStart));
 console.log("current unix central time: " + timeConverter(testUnixEnd));

// var testUnixStart = 1598256000;
// var testUnixEnd = 1598288400;

var requester = 'https://finnhub.io/api/v1/stock/candle?symbol=TSLA&resolution=1&from=' + testUnixStart + '&to=' + testUnixEnd + '&token=bt01m7n48v6ouqftkos0'

// BTC Price
price.getCryptoPrice("USD", "BTC").then(obj => { // Base for ex - USD, Crypto for ex - BTC 
 // console.log("BTC Price: " + obj.price)
}).catch(err => {
 console.log(err)
})

// ETH Price
price.getCryptoPrice("USD", "ETH").then(obj => { // Base for ex - USD, Crypto for ex - ETH 
 // console.log("ETH Price: = " + obj.price)
}).catch(err => {
 console.log(err)
})

// Initialize Finnhub
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bt01m7n48v6ouqftkos0"; // Replace this
const finnhubClient = new finnhub.DefaultApi();
// requester = 'https://finnhub.io/api/v1/scan/technical-indicator?symbol=TSLA&resolution=D&token=bt01m7n48v6ouqftkos0';

// Stock Price
// request('https://finnhub.io/api/v1/stock/candle?symbol=TSLA&resolution=1&from=1572651390&to=1572910590&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body);
// });

// Stock Price
request(requester, { json: true }, (err, res, body) => {
 if (err) { return console.log(err); }
 // console.log(body);
});

// Stock Candles
// request('https://finnhub.io/api/v1/stock/candle?symbol=TSLA&resolution=1&from=1598256000&to=1598288400&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
request(requester, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(body);
  console.log('Last Candle price: ' + body.c[0]);
  let max = 0;
  let min = 10000;
  console.log(body.c.length);
  for (i = 0; i < body.c.length; i++) {
    // console.log("current unix time: " + timeConverter(body.t[i]));
    // console.log("current unix time: " + body.c[i]);
    if (body.c[i] > max) {
      max = body.c[i]; 
      }  else {
        if (body.c[i] < min) {
          min = body.c[i] 
        }
      } 
      }
  let diff = (max - min);

  console.log("price spread for period: " + Math.floor(diff));

  if (diff > (max * .05)) {
    console.log('Price move of max divided by diff: ' + Math.floor(diff/max * 100) + '%');
  }

  console.log('High price for the day: ' + Math.floor(max));
  console.log('Low price for the day: ' + Math.floor(min));    
});

// Stock Candles
request('https://finnhub.io/api/v1/stock/candle?symbol=TSLA&resolution=1&from=tsMinusOne&to=ts&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  //console.log(body.c);
});

// Indicies Constituents
request('https://finnhub.io/api/v1/index/constituents?symbol=^GSPC&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(body);
});

// News Sentiment
request('https://finnhub.io/api/v1/news-sentiment?symbol=V&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(body);
});

// Peers
request('https://finnhub.io/api/v1/stock/peers?symbol=TSLA&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(body);
});

// Price Target
request('https://finnhub.io/api/v1/stock/price-target?symbol=TSLA&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
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
  //console.log(body.points[0].atime);
});

// MACD
request('https://finnhub.io/api/v1/scan/technical-indicator?symbol=TSLA&resolution=D&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  //console.log(body);
});

// Earnings Call - only available with Premium
request('https://finnhub.io/api/v1/stock/transcripts/list?symbol=TSLA&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(body);
});

// Economic Calendar
request('https://finnhub.io/api/v1/calendar/economic?token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(body.economicCalendar);
  // console.log(body.economicCalendar[0].country);
});

// Company News
request('https://finnhub.io/api/v1/company-news?symbol=TSLA&from=2020-04-30&to=2020-05-01&token=bt01m7n48v6ouqftkos0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(body[0]);
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

