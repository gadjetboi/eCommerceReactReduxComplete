import React from "react";
import { Button } from "react-bootstrap";

export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div class="container">
					<div class="jumbotron">
				        <h1 class="display-3">Bootstrap Template Loaded</h1>
				        <div class="btn btn-primary">Primary</div>
				        <div class="btn btn-warning">Warning</div>
				     </div>
				     <div>
				     	 <Button bsStyle="primary">React Bootstrap</Button>
				     </div>
				</div>
		 </div>
		)
	}
}