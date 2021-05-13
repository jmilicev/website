
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express')
const flash = require('express-flash');
const session = require('express-session');
const bcrypt = require('bcrypt');
const passport = require('passport')

const app = express();
const path = require('path');
const port = 3000;

app.set('view-engine', 'ejs');

const initializePassport = require('./passport-config');

initializePassport(
    passport, 
    email => users.find(user => user.email === email)
)


const users = [];
const password = [];

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(express.static('source'));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
//app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('index.ejs', { name : "Jovan"});
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.post('/register', async (req, res) => {
    try{
        const hasedpswd = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name : req.body.name,
            email: req.body.email,
            password: hasedpswd,
        })
        res.redirect('/login');
    }
    catch{
        res.redirect('/register');
    }
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.listen(port, '0.0.0.0', () => {
  console.log(`app.js listening on http://0.0.0.0:${port}`)
})