
const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('source'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/source/home.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname+'/source/login.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/source/home.html'));
})

app.get('/ttt', (req, res) => {
    res.sendFile(path.join(__dirname+'/source/tictactoe.html'));
})

app.listen(port, '0.0.0.0', () => {
  console.log(`app.js listening on http://0.0.0.0:${port}`)
})