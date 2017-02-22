import React from "react";

import logo from './img/logo.png';
import Search from './search.js';

// the header
var Header = React.createClass({

	render: function() {
		return (
			<div className="headerContainer">

				<div className="logoContainer">
					<img src={ logo } className="logoImg"/>
					<h1>little<span>black</span>book</h1>
				</div>

				<Search searchTerm={ this.props.searchTerm } onAddSearchTerm={ (searchTerm) => this.props.onAddSearchTerm(searchTerm) } />
			</div>
		)

	}
});

export default Header;