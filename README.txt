This is a simple weather project using HTML, CSS, NodeJS. It also requires openweathermap API.

To test this project in your system first you will need to set your API key in app.js on LINE 16 i.e.

const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=  YOUR API key  &units=metric";

and thats it.

If you donot have API key just sign up on openweathermap and then they will generate you your API key.

download this project, then

STEPS to demonstrate:
1. Set API key in app.js
2. Open terminal cd to the project dierctory
3. type nodemon app.js
4. inside browser type localhost:3000 and hit enter
5. Type the city you want to get weather details and DONE Voila!! you have the weather info about that city

NOTE : 
-openweathermap provides a lot of information about weather and sends data in JSON format out of all this data
 I only used current temperature, feels like temperature, weather icon(provided by openweathermap).
-This project was part of udemy exercise in course Complete Web Development Bootcamp 2022 by Dr. Angela WU.
