const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
	res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {
	const city = req.body.cityName;
	console.log("Name entered by user: "+city);

	const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=&units=metric";
	https.get(url, function(response) {
		console.log(response.statusCode);
		response.on("data", function(data) {
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const feels_like = weatherData.main.feels_like;
			const icon = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png";
			console.log(weatherData.weather[0].description);
			res.write('<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></head>');
			res.write('<body style="color:#483434; background-color: #B8DFD8; font-family: sans-serif;"><center>');
			res.write("<h1>The temperature in "+city+" is "+temp+" degrees Celcius.</h1>");
			res.write("<h2>Feels Like temperature "+feels_like+" degrees Celcius.");
			res.write("<h2>The weather is currently "+weatherData.weather[0].description+".</h2>");
			res.write("<img src="+icon+"></img><br>");
			res.write('<form action="/index" method="POST"><button class="btn btn-lg btn-warning" type="submit">Chose Different City</button></form>');
			res.send();
			console.log("\n"+data);
		});
	});
});

app.post("/index", function(req, res) {
	res.sendFile(__dirname+"/index.html");
});

app.listen(3000, function() {
	console.log("Server started on port 3000");
});
