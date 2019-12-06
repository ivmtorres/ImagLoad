/*
var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
*/
var express = require("express");
var config = require('./server/configure');

var app = express();
app.set("port", process.env.PORT || 3300);
app.set("views", __dirname + "/views");
app = config(app);

app.get("/", function(req, res) {
  //54545
  res.send("Hola Mundo"); //dassssssssssssdddxxssss
}); //4545asdasdssssasas
app.listen(app.get("port"), function() {
  console.log("Server up: http://localhost:" + app.get("port"));
});
