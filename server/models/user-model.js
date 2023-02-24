const mongoose = require('mongoose');

const usreSchema = new mongoose.Schema({
    phone : {
        type : String,
        trim : true,
        required : true
    },
    name : {
        type : String,
        trim : true,
        required : false
    },
    avatar : {
        type : String,
        required : false,
        get : (avatar)=>{
            if(avatar){
                return `${process.env.BASE_URL}${avatar}`
            }
            return avatar;
            
        }
    },
    activated : {
        type : Boolean,
        required : false,
        default : false
    }

},{
    timestamps : true,
    toJSON : {
        getters : true,
    }
})

module.exports = mongoose.model('User', usreSchema , 'users');