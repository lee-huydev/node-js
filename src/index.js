const express = require('express');
const path = require('path')
const morgan = require('morgan')
const { create } = require('express-handlebars');
const app = express();
const port = 3000;
// Use when load img static
app.use(express.static(path.join(__dirname, 'public')))
// Config extname of handlebars
const hbs = create({
  extname: '.hbs'
})
// Logger HTTP protocol at consolog when request on browser
app.use(morgan('combined'));
// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))
console.log(__dirname)
// Reander only content home.handlebar and layout
app.get('/', (req, res) => {
    res.render('home');
})
// Render only content news.handlebars and layout || layout: false: No render layout
app.get('/news', (req, res) => {
    res.render('news' ,{layout: false});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
