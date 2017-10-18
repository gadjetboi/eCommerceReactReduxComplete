const mongoose = require('mongoose');
const orderSchema = require('./schemas/order');

const Order = module.exports = mongoose.model('Order', orderSchema);

module.exports.getOrderBySessionId = (sessionId, callback) => {
	Order.findOne({"sessionId": sessionId}, callback);
}