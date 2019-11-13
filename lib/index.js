const express = require('express');
const app = express();
const parser = require('body-parser');
const Sample = require('./models/Sample');

app.use(parser.json());

app.get('/sample', (req, res) => {
    Sample.find({}).then(samples => {
        res.json(samples);
    });
});

app.listen(3000, () =>
    console.log('listening on port 3000')
);