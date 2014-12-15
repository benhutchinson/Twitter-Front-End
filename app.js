var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var http = require('http').Server(app);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/dummycontent.html', function (req, res) {
  setTimeout(function(){
    res.render('dummy');
  }, 700);
})

http.listen(port, function(){
	console.log('Listening');
});


// var server = app.listen(port, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log('Example app listening at http://%s:%s', host, port)

// })

module.exports = app;