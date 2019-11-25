require( '@babel/register')

const controllers = require('./controllers/index')

const express = require('express')
const app = express()
const port = 3000

app.get('/', controllers)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))