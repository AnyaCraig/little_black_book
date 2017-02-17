import React from "react";

import logo from './img/logo.png';

var Nav = React.createClass({
	render: function() {
		return (
			<div className="navContainer">

				<div className="logoContainer">
					<img src={ logo } className="logoImg"/>
					<h1>little<span>black</span>book</h1>
				</div>

				<div className="searchContainer">
					<input placeholder="Search" />
					<svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.64 494.64">
					    <path d="M280,278a153,153,0,1,0-2,2L448,450M357,333,467,443l-26,26L331,359" transform="translate(0.18 0.18)"/>
					</svg>
				</div>
			</div>
		)

	}
});

export default Nav;