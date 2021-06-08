let x= require("express");
let app=x();

app.use('/', (req,res,next)=>
{
   res.send("<h1> Express</h1>");})


   let server = app.listen(8000, function () {  
      let host = server.address().address;  
      let port = server.address().port;  
      console.log('Example app listening at http://%s:%s', host, port);  
    });  