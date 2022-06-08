const express = require('express');
const app = express();
const nodemon = require('nodemon');

const Detail = require('./models/reg');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/beherchange', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('MONGO CONNECTION OPEN!')
})
.catch(err =>{
    console.log('error');
    console.log(err);
})

const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));

app.listen(8080,()=>{
    console.log('listning on port 8080');
})


app.get('/',(req,res)=>{
    res.render('homepage.ejs');
})
app.get('/about',(req,res)=>{
    res.render('about.ejs');
})
app.get('/contactus',(req,res)=>{
    res.render('contactus.ejs');
})
app.get('/register',(req,res)=>{
    res.render('register.ejs');
})
app.get('/login',(req,res)=>{
    res.render('login.ejs');
})
app.get('/mission',(req,res)=>{
    res.render('mission.ejs');
})
app.post('/register',async (req,res)=>{
    const newDetail = new Detail(req.body);
    await newDetail.save();
    res.render('registersuccess.ejs');
})


