var express = require('express');
var router = express.Router();
const {URL, URLSearchParams} = require('url');
const fetch = require('node-fetch');
const redis = require('redis');
const {fetchOptions} = require('../config/openweathermap')

const client = redis.createClient();


router.post('/weather', function (req, res, next) {
    const city = req.body.city
    client.get(`${city}`, function(err, reply) {
        // reply is null when the key is missing
        if (err) throw err;
        if (reply) {
            reply = JSON.parse(reply);
            res.json({
                data: [reply, reply, reply, reply],
                cache_hit: true
            });
        }else {
            let url = new URL(fetchOptions.url)
            const params = new URLSearchParams();
            params.append('q', req.body.city);
            params.append('appid', fetchOptions.secretKey);
            url.search = params.toString();
            fetch(url, {method: fetchOptions.method})
                .then(res => res.json())
                .then(json => {
                    const data = { location:  json.name, temperature: json.main.temp}
                    client.set(`${city}`, JSON.stringify(data), 'EX', 15)
                    res.json({
                        data: [data, data, data, data],
                        cache_hit: false
                    });
                })
                .catch(err => console.error(err));
        }
    });
});

module.exports = router;
