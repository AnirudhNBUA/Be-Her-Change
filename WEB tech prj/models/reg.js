const mongoose = require('mongoose');
const regSchema = new mongoose.Schema({
firstname:{
    type:String,
    lowercase:true,
    required:true
},
lastname:{
    type:String,
    lowercase:true,
    required:true
},
phone:{
    type:Number,
    required:true
},
email:{
    type:String,
    required:true
}
});
const Detail = mongoose.model('Detail',regSchema);
module.exports = Detail;