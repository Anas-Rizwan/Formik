const dotenv = require('dotenv')
const express = require('express')
const app = express()

dotenv.config({ path: './config.env' })

require('./db/Connection')
app.use(express.json())
// const User = require('./model/userSchema')
app.use(require('./router/auth'))
// linikg router files
const PORT = process.env.PORT



// Middleware
const middleware = (req, res, next) => {
    // Do every authentication and validation here then user will move to next()
    res.send("Hello Middleware");
    next()
}

app.get('/', (req, res) => {
    res.send('Hello Home')
})
app.get('/about', middleware, (req, res) => {
    res.send('Hello about page')
})
app.get('/contact', (req, res) => {
    res.send('Hello Contact')
})
app.get('/signin', (req, res) => {
    res.send('Hello Signin')
})

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})