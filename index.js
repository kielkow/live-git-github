const express = require('express')

const app = express()

app.get('/teste', (req, res) => {
    res.json({hello: 'world'})
})

app.listen('3333')