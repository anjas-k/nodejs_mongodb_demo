require ('./models/db');
const express = require ("express");
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser');
const employeeController = require('./controllers/employeeController');
const app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({  handlebars: allowInsecurePrototypeAccess(Handlebars), extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("server running");
})
app.use('/', employeeController);