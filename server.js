const express = require('express')
const dotenv = require('dotenv')
const app = express()
const morgan = require('morgan')
const path = require('path')
const connectDB = require('./server/database/connection')


dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 3030


// middleware method, log request
app.use(express.json());
app.use(morgan('tiny'))

//database connection
connectDB()

// parse request to body
app.use(express.urlencoded({ extended: true }))

// view engine
app.set("view engine", "ejs")
// app.set("view", path.resolve(__dirname, "view/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


//load router
app.use('/', require('./server/routes/router'))


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})