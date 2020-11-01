var express = require('express');
var router = express.Router();
const { URL, URLSearchParams } = require('url');
const fetch = require('node-fetch');
const {fetchOptions} = require('../config/openweathermap')


router.post('/', function(req, res, next) {
  var url = new URL(fetchOptions.url)
  const params = new URLSearchParams();
  params.append('q', req.body.city);
  params.append('appid', fetchOptions.secretKey);
  url.search = params.toString();
  fetch(url, {method: fetchOptions.method})
      .then(res => res.json())
      .then(json => {
        res.render('weather', { city:  json.name, temp: json.main.temp});
      })
      .catch(err => console.error(err));
  // res.render('index', { title: 'Express' });
});

module.exports = router;
