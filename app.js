var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/dummycontent.html', function (req, res) {
  res.render('dummy');
})

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})