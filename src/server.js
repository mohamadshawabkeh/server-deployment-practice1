'use strict';
const express = require("express");
const app = express();
const stamper = require('./middlewares/stamper');
const notFoundHandler = require('./handlers/notFoundHandler');
const serverDrop = require('./handlers/serverDrop');

app.get('/', (req, res) => {
    res.send("This is Home Page");
});

app.get('/info', stamper, sendRes)

app.get('/drop', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    })
    res.send(result);
})

function sendRes (req,res){
    res.json({
        id: 1,
        name: "john",
        email: "john@g2g.com",
        time: req.timeStamp,
    });
};

app.use('*', notFoundHandler);
app.use(serverDrop)




function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}