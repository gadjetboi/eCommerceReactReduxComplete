import React from "react";
import Cart from '../components/Cart';

export default class CartItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
	
		const product = this.props.product;

		if(typeof product === 'undefined') {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			)
		}
	
		return ( 
			<ul>
             	<li>
             		<div>
             			<p>SKU: {product.sku}</p>
             			<p>Title: {product.title}</p>
             			<p>Description: {product.description}</p>
             			<p>Qty: {product.quantity}</p>
             			<p>Price: {product.price}</p>
         				{
             				product.images.map((img, index) => {
             					return ( 
             						<div key={index}>
             							<img src={img} />
             						</div>
             					)
             				})
         				}
             		</div>
             	</li>    
            </ul>
		)
		
	}
}