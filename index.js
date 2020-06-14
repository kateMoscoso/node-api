const express = require('express');
const chalk = require('chalk');

const app = express();;
const port = process.env.PORT || 3000

app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.get('/api/courses', (req, res) =>{
    res.send([1,2,3])
})

app.get('/api/courses/:id', (req, res) =>{
    res.send(req.params.id)
})

app.get('/api/post/:year/:month', (req, res) =>{
    //req.query
    res.send(req.params)
})

app.listen(port, () => console.log(`Listening port ${chalk.green(port)}`))
//export PORT 5000