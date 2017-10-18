const mongoose = require('mongoose');
const productSchema = require('./product');

const cartSchema = module.exports = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	sessionId: String,
	status: String,
	quantity: Number,
	totalAmount: Number,
	products: [{
		productDetail: productSchema,
		quantity: Number
	}]
});