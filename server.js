'use strict';

const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        items: [
            {
                name: "sword",
                weight: 20,
                value: "25gp"
            },
            {
                name: "short sword",
                weight: 10,
                value: "5gp"
            },
            {
                name: "long sword",
                weight: 50,
                value: "250gp"
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
