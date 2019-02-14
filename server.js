const express = require('express');

const app = express()

const hbs = require('hbs')
require('./hbs/helpers')

// Conf. de el puerto P/Heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'javier'
    })
});

app.get('/about', (req, res) => {
    res.render('about')
});


app.listen(port, () => {
    console.log(`App corriendo en el puerto ${ port }`);
})