const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const router = require('./router/myrouter')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(session({secret:"mysession",resave:false,saveUninitialized:false}))
app.use(router)


app.listen(8080,()=>{
    console.log('start 8080')
})

default.exports = app