const express = require('express')
const app = express()
const port = 3000
const path = require('path')
 
app.get('/book/:bookId', function (req, res) {
  res.send("Pobranie ksiazki")
})
 
app.put('/book', function (req, res) {
  res.send("Dodanie ksiazki")
})

app.post('/book/:bookId', function (req, res) {
  res.send("Edycja ksiazki")
})

app.delete('/book/:bookId', function (req, res) {
  res.send("Usuniecie ksiazki")
})

app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`)
)