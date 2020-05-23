//import dependencies
const express = require('express');
const port = 3000
const app = express();

const usermodel = require('./models/userModel');

app.post('/add', (req, res) => {
    res.send('a post request');
})

app.get('/add', (req, res) => {

    let user1 = { name : 'Leon Kennedy', username : 'leon', contact : '9999999999', age : 40 };

    let mymodel = new usermodel(user1);

    res.send('a get request');
})

app.get('/', (req, res) => {
    res.send('hello from express');
})

//run the server
app.listen( port, () => {
    console.log('server started!!!')
})