const mongoose = require('mongoose');

const productSchema = module.exports = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	sku: String,
	title: String,
	description: String,
	quantity: Number,
	price: Number,
	images: [String],
	categoryId: [String]
});