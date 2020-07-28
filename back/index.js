const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:2717/bitMusic', (err,er)=>{
    if(err){
        console.log("connection failed")
    }
    else{
        console.log("connection ok")
    }
})