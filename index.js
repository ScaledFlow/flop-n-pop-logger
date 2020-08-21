// NPM 
 const finnhub = require("finnhub");
 const request = require("request");
 const price = require('crypto-price');

// Initialize Finnhub
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bt01m7n48v6ouqftkos0"; // Replace this
const finnhubClient = new finnhub.DefaultApi();
