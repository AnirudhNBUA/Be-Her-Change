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

const sample = new Detail({
    firstname:'Anirudh',
    lastname:'karanam',
    phone:8688456460,
    email:'anirudhnbua@gmail.com'
})
sample.save().then(p =>{
    console.log(p);
})
.catch(e=>{
    console.log(e);
})