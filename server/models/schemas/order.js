const mongoose = require('mongoose');
const productSchema = require('./product');

const orderSchema = module.exports = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	sessionId: String,
	orderNo: String,
	createdOn: Date,
	quantity: Number,
	totalAmount: Number,
	orderStatus: String,
	shipping: {
		customer: String,
		address: String,
		city: String,
		region: String,
		state: String,
		country: String,
		deliveryNotes: String
	},
	tracking: {
		company: String,
		trackingNumber: String,
		trackingStatus: String,
		estimatedDelivery: Date
	},
	payment: {
		method: String,
		transactionId: String,
		amount: Number,
		currency: String,
		paymentStatus: String
	},
	products:[productSchema]
});