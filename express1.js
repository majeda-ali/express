/*
 web app : 3 pages 
 
/
/about
/contact

*/
/*
let http = require('http');
let url = require('url');

let server = http.createServer(function(req, res) {
    let page = url.parse(req.url).pathname;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (page == '/') {
    res.write('Home page ');
  } else if (page == '/about') {
    res.write('About project ');
  } else if (page == '/contact') {
    res.write('Contact page ' ) ; }
  res.end();
});
server.listen(8080);
*/

let  express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.send('Home page ');
});

app.get('/about', function(req, res) {
  res.send('About project ');
});

app.get('/contact', function(req, res) {
  res.send('Contact page ');
});



let server = app.listen(8000, function () {  
  let host = server.address().address;  
  let port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  