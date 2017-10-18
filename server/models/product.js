const mongoose = require('mongoose');
const productSchema = require('./schemas/product');

const Product = module.exports = mongoose.model('Product', productSchema);

module.exports.getProductsByCategoryId = (categoryId, callback) => {
	console.log(categoryId);
	console.log('getProductsByCategoryId');
	Product.find({"categoryId": categoryId}, callback);
}

module.exports.getProductByIds = (ids, callback) => {
	console.log(ids);
	console.log('getProductByIds');
	Product.find({"_id": { $in: ids }}, callback);
}

module.exports.addProduct = (product, callback) => {
	Product.create(product, callback);
}