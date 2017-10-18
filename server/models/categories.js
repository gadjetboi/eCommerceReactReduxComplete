const mongoose = require('mongoose');
const categoriesSchema = require('./schemas/categories');

const Categories = module.exports = mongoose.model('Categories', categoriesSchema);

module.exports.getCategories = (callback, limit) => {
	Categories.find(callback).limit(limit);
}

module.exports.getCategoryById = (id, callback) => {
	Categories.findById(id, callback);
}

module.exports.addCategory = (category, callback) => {
	Categories.create(category, callback);
}