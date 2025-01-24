import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Four extends Component {
	render() {
		return (
			<div>
				<h1>Four</h1>
				<ul>
					<li>
						{/* <Link to="/One">One</Link>
						<Link to="/Two">Two</Link>
						<Link to="/Three">Three</Link>
						<Link to="/Four">Four</Link> */}
						<Link to="/Four/123">Four Point one</Link>
					</li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

export default Four;
