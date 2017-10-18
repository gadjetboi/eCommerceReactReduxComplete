var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

Product = require('./models/product');
Categories = require('./models/categories');
Cart = require('./models/cart');
Order = require('./models/order');

//To fix deprecation warning
mongoose.Promise = global.Promise;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.options('*', cors()) // include before other routes

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Connect to mongoose
mongoose.connect('mongodb://192.168.0.12:27017/eCommerceReactReduxDb');

var db = mongoose.connection;

var apiUrl = '/api';

//CATEGORIES
app.get(apiUrl + '/categories', (req, res) => {
	console.log('called api/categories');
	Categories.getCategories((err, categories) => {
		if(err){
			throw err;
		}
		res.json(categories);
	});
});

app.get(apiUrl + '/categories/:id', (req, res) => {
	console.log('called api/categories/id');
	try {
		//setTimeout(function(){
			var ObjectId = mongoose.Types.ObjectId; 
			var id = new mongoose.Types.ObjectId(req.params.id);

			Categories.getCategoryById(id, (err, product) => {
				if(err){
					throw err; //TODO: return 404 instead
				}
				res.json(product);
			});
		//}, 2000);
	}
	catch(err) {
		res.json(null); //TODO: return 404 instead
	}
});

//PRODUCTS
app.get(apiUrl + '/products', (req, res) => {
	console.log('called api/products');
	Product.getProducts((err, products) => {
		if(err){
			throw err;
		}
		res.json(products);
	});
});

app.post(apiUrl + '/products', (req, res) => {
	console.log('called POST api/products');
	console.log(req.body.categoryId);

	const categoryId = req.body.categoryId;

	Product.getProductsByCategoryId(categoryId, (err, product) => {
		if(err){
			throw err; //TODO: return 404 instead
		}
		res.json(product);
	});
});


//ADD PRODUCT
app.post(apiUrl + '/products', (req, res) => {

	var product = req.body;
	
	Product.addProduct(product, (err, product) => {
		if(err){
			throw err;
		}
		res.json(product);
	});
});

//CART
app.get(apiUrl + '/cart/:sessionId', (req, res) => {
	
	console.log('called GET api/cart');
	
	Cart.getCartBySessionId(req.params.sessionId, (err, cart) => {
		if(err){
			throw err; //TODO: return 404 instead
		}
		res.json(cart);
	});
});

app.post(apiUrl + '/cart', (req, res) => {
	const bodyObj = req.body;

	console.group();
		console.log('called POST api/cart');
		console.log(bodyObj.sessionId);
		console.log(bodyObj.productId);
		console.log(bodyObj.quantity);
	console.groupEnd();

	const cartObj = {
		"sessionId": bodyObj.sessionId,
		"productId": bodyObj.productId,
		"quantity": bodyObj.quantity

	}

	Cart.addProductToCart(cartObj, (err, product) => {
		if(err){
			throw err; //TODO: return 404 instead
		}
		res.json(product);
	});
});

app.put(apiUrl + '/cart', (req, res) => {
	const cartObj = req.body;
	
	Cart.updateProductToCart(cartObj, (err, product) => {
		if(err){
			throw err; //TODO: return 404 instead
		}
		console.log(product);
		res.json(product);
	});
});

//ORDER
app.get(apiUrl + '/order/:sessionId', (req, res) => {
	
	console.log('called GET api/order');
	
	Order.getOrderBySessionId(req.params.sessionId, (err, cart) => {
		if(err){
			throw err; //TODO: return 404 instead
		}
		res.json(cart);
	});
});

app.listen(3000);
console.log('running on port: 3000');