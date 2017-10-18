const mongoose = require('mongoose');
const cartSchema = require('./schemas/cart');

const Cart = module.exports = mongoose.model('Cart', cartSchema);

module.exports.addProductToCart = (cartObj, callback) => {
	console.log('addProductToCart');
	console.log(cartObj);
	const cartData = {
		"_id": mongoose.Types.ObjectId(),
		"sessionId": cartObj.sessionId,
		"status": 'Pending',
		"quantity": cartObj.quantity,
		"totalAmount": 0,
		"products": [{
			"_id": cartObj.productId,
			"quantity": cartObj.quantity
		}]
	}
	
	Cart.create(cartData, (cartErr, cart) => {
		populateProductDetails(cartErr, cart, callback);
	})
}

module.exports.updateProductToCart = (cartObj, callback) => {
	console.log('updateProductToCart');
	console.log(cartObj);
	console.log(cartObj.sessionId);
	console.log(cartObj.products);

	Cart.findOneAndUpdate({ "sessionId": cartObj.sessionId }, { $set: {
		"products": cartObj.products,
		"quantity": cartObj.quantity,
		"totalAmount": cartObj.totalAmount
	}}, (cartErr, cart) => {
		populateProductDetails(cartErr, cart, callback);	
	});
}

module.exports.getCartBySessionId = (sessionId, callback) => {
	console.log('getCartBySessionId');
	console.log(sessionId);
	Cart.findOne({"sessionId": sessionId}, (cartErr, cart) => {
			if(cart == null) {
				callback(cartErr, cart);
			}
			else {
				populateProductDetails(cartErr, cart, callback);
			}
	});
}

function populateProductDetails(cartErr, cart, callback) {
	const productIds = [];
	cart.products.forEach((product) => {
		productIds.push(product._id);
	});

	if(productIds.length > 0) {
		Product.getProductByIds(productIds, (productErr, products) => {
			let totalAmount = 0;
			products.forEach((productDetail, index) => {
				cart.products[index].productDetail = productDetail;
				totalAmount += cart.products[index].quantity * productDetail.price;
			});
			cart.totalAmount = totalAmount;
			callback(cartErr, cart);
		});
	}
}