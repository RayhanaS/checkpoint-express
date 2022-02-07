// import express 
const express = require ('express'); 

// init express 
const app = express();

// create port 
const PORT = 5000 ; 

//create middleware
const verifDate=(req,res,next)=>{
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let hours = new Date().getHours();
days[new Date().getDay()] !=='saturday'&& days[new Date().getDay()] !=='sunday'&& hours>9 && hours<17?
 next()
  : res.send ("<h1> come back later  </h1>");
}
app.use (verifDate)
app.use(express.static('public'));
// creating ther server 
app.listen (PORT,(err) => 
err?console.log(err) : console.log (`server is now listening on ${PORT}`));

// routing middleware



