'use strict';

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // make request to items.json
    fs.readFile(__dirname + '/public/data/items.json','utf8', (err, data) => {
        if(err) throw err;
        res.render('home.hbs', JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
