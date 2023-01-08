const express = require('express')
const app = express()
const port = 3000
const translator = require('./translator')
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/translator', jsonParser, async (req, res) => {
    let body = req.body
    console.log(body)
    const translation = await translator.translator(body.text)
    console.log('translation: ', translation)
    res.json({translation: translation})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
