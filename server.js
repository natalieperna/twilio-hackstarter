var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());

app.post('/sms', function(request, response) {
    response.header('Content-Type', 'text/xml');
    var body = request.param('Body');
    response.send('<Response><Sms>' + body + '</Sms></Response>');
});

app.listen(process.env.PORT || 3000);

