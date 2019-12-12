const mongoose = require('mongoose');
const Schema = mongoose.Schema;






// create schema

const StoreSchema = new Schema({
    name:{
        type:String,
        required: [true,'Name is required']
    },
    store:{
        type:String
    },
    available:{
        type:Boolean,
        defualt:false
    },


});

const Store= mongoose.model('store', StoreSchema);

module.exports = Store;