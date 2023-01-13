// This is based on tutorial of Brad (LearnWebCode)

const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(getWeather)

function getWeather(req, res, next){
    req.visitorWeather = true
    next() 
}

app.get('/', (req, res) => {
    res.send(`
    <p>${req.visitorWeather ? "<h2>It is raining.</h2>" 
    : "<h2>It is not raining.</h2>"}

    <h1> What color is the sky on a clear day? </h1>
    <form action="/result" method="POST">
        <input type="text" name="color">
        <button>Submit Answer</button>
    </form>
    `)
})

app.post('/result', (req, res) => {
   if(req.body.color.trim().toUpperCase() === "BLUE"){
    res.send('<h1>Congrats! You are correct.</h1>')
   }
    res.send('<h1>Incorrect! Pls try again.</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Thank you for learning about us!</h1>')
})

app.listen(3000)