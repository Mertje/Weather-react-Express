const PORT = 8000;
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const path = require('path');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let city = "";

app.use(express.static(path.join(__dirname, 'frontend/build')));

//gets city name from input react
app.post("/city", (req, res) => {
  city = req.body.data.cityData;
  res.send(req.body);
});

//sends the api call back to weather
app.get("/weather", (req, res) => {
  axios
    .get(`http://api.weatherapi.com/v1/forecast.json?q=${city}&days=3`, {
      headers: {
        "Content-Type": "application/json",
        key: process.env.REACT_APP_WEATHER_API_KEY,
      },
    })
    .catch((e) => console.log(e))
    .then((respo) => respo ? res.json(respo.data) : res.json());
});

app.listen(process.env.PORT || 8000, () => console.log(`server is running ${PORT}`));
