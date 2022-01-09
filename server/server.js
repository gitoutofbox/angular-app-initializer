var express = require('express');
var cors = require('cors')


var bodyParser = require('body-parser');
var app = express();
app.use(express.static('app'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
  });

app.get('/get', function (req, res) {
    setTimeout(() => {
        res.send({
            currency: 'Pound'
        });
    }, 5000)
    
});
app.get('/get-amount', function (req, res) {
    const currency = req.query.currency;
    const amount  = 100;
    res.send({
        amount: `${amount} ${currency}`
    });
});

