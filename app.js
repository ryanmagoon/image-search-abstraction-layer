const express = require('express'),
    mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);
