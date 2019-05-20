var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var path = require('path')

//1. create mongoose connection to db
mongoose.connect('mongodb://localhost/beltExam')
//2. set schema
// var ProductSchema = new mongoose.Schema({
//     title: {type:String, min:[4, 'Title is not long enough'], required:true},
//     price: {type: Number, required:true},
//     image_url: String,
// });
// //3. save schema
// mongoose.model('Product', ProductSchema)
// //4. retrieve schema to use in routes
// var Product = mongoose.model('Product')


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public' ));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function(){
    console.log('connected to port 8000')
})
