const express = require('express')
const app = express()
const port = 3000
const translator = require('./translator')
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/translator', jsonParser, async (req, res) => {
    let body = req.body
    console.log(body)
    const translation = await translator.translator(body.text)
    console.log('translation: ', translation)
    res.json({translation: translation})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
