const express = require('express');
const app = express();
const path = require('path');


require('dotenv').config();

// db 
const db = require('./config/connection')

// routes
const formRoutes = require('./routes/form')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
       res.render("index")
})

// form routes
app.use(formRoutes);

app.listen(3000, () => {
    console.log('server runnig at port 3000');
})
