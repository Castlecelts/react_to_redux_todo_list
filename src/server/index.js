require( '@babel/register')
const express = require('express')
const bodyParser = require('body-parser')

const controllers = require('./controllers/index')

const app = express()
const port = 3000

const jsonParser = bodyParser.json()

console.log(controllers.default)
app.get('/', controllers.default)

const apiRouter = new express.Router();
app.get('/todos', controllers.default)
app.post('/todo', jsonParser, controllers.default)

app.use('/api/todo-list', apiRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))