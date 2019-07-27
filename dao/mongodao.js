const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const mongoURL = 'mongodb://localhost/tigem-meryem'

mongoose.connect(mongoURL, {useNewUrlParser: true},(err,db)=>{
    if(err){
        console.log('hata oldu'+err);
    }else{
        console.log('bağlantı oluştu '+ mongoURL);
    }
});
