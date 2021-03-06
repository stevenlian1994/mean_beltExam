var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var path = require('path')

//1. create mongoose connection to db
mongoose.connect('mongodb://localhost/beltExam')
//2. set schema
var ReviewSchema = new mongoose.Schema({
    name: {type:String, min:3},
    stars: Number,
    content: {type:String, min:3},
});
var ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image_url: String,
    reviews: [ReviewSchema],
});
var MovieSchema = new mongoose.Schema({
    title: {type:String, min: [3, 'title must be at least 3 characters']},
    reviews: [],
});

// //3. save schema
mongoose.model('Review', ReviewSchema)
mongoose.model('Product', ProductSchema)
mongoose.model('Movie', MovieSchema)
// //4. retrieve schema to use in routes
var Review = mongoose.model('Review')
var Product = mongoose.model('Product')
var Movie = mongoose.model('Movie')


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public' ));

app.get('/readAllMovies', function(req,res){
    Movie.find({}, function(err,movies){
        if(err){
            console.log('something went wrong');
        } else {
            res.json({movies})
        }
    })
})

app.post('/createProduct', function(req,res){
    console.log('inside server', req.body)
    var product = new Product(req.body)
    product.save(function(err){
        if(err){
            console.log('something went wrong', err.errors);
            res.json(err)
        } else {
            console.log('successfully added asdf', product)
            res.json(product)
        }
    })
})

app.post('/createMovie', function(req,res){
    console.log('inside server', req.body)
    var movie = new Movie(req.body)
    movie.save(function(err){
        if(err){
            console.log('something went wrong', err.errors);
            res.json(err)
        } else {
            console.log('successfully added asdf', movie)
            res.json(movie)
        }
    })
})

app.put('/updateProduct', function(req,res){
    Product.update({_id:req.param('_id')}, req.body, function(err){
        if(err){
            console.log(err)
        } else {
            res.json({message:'succesfully updated product'})
        }
    })
})
app.put('/updateMovie', function(req,res){
    console.log('inside server')
    Movie.update({_id:req.param('_id')}, req.body, function(err){
        if(err){
            console.log(err)
        } else {
            res.json({message:'succesfully updated movie'})
        }
    })
})

app.delete('/deleteProduct/:id', function(req,res){
    console.log('inside server:', req.param('id') )
    Product.deleteOne({_id: req.param('id')}, function(err, product){
        if(err){
            console.log(err)
        } else {
            return res.json(product);
        }
    })
})
app.delete('/deleteMovie/:id', function(req,res){
    console.log('inside server:' )
    console.log('inside server:', req.param('id') )
    Movie.deleteOne({_id: req.param('id')}, function(err, movie){
        if(err){
            console.log(err)
        } else {
            return res.json(movie);
        }
    })
})

app.post('/createReview', function(req,res){
    var review = new Review(req.body)
    review.save(function(err){
        if(err){
            console.log('something went wrong', err.errors);
            res.json(err)
        } else {
            console.log('successfully added review', review)
            res.json(review)
        }
    })
})


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function(){
    console.log('connected to port 8000')
})
