const mongoose = require('mongoose');

const categoriesSchema = module.exports = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: String
});