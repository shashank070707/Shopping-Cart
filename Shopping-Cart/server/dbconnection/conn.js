const mongoose = require('mongoose');

const DB = process.env.DATABASE

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}).then(()=>{
    console.log("Database Connection Successfull!!")
}).catch((err)=>{
    console.log(err)
})