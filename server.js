const express = require('express')
const dotenv = require('dotenv')
const app = express()
const morgan = require('morgan')
const path = require('path')

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 3030


// middleware method, log request
app.use(morgan('tiny'))

// parse request to body
app.use(express.urlencoded({ extended: true }))

// view engine
app.set("view engine", "ejs")
// app.set("view", path.resolve(__dirname, "view/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.get('/', (req, res) => {
    res.render('index')
})

//index --> new user
app.get('/add-user', (req, res) => {
    res.render('add_user')
})

//index --> new user
app.get('/update-user', (req, res) => {
    res.render('update_user')
})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})