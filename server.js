const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 3030


app.get('/', (req, res) => {
    res.send('User management system')
})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})