const express = require('express')

const app = express()

app.get('/teste', (req, res) => {
    res.json({hello: 'world'})
})

app.post('/teste/post', (req, res) => {
  res.json({post: 'post enviado'})
})

app.put('/teste/put', (req, res) => {
  res.json({put: 'put enviado'})
})


app.listen('3333')