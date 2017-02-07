import React from "react";

var Nav = React.createClass({
	render: function() {
		return (
			<div className="nav-container">

				<span>Contacts | </span>
				<span>Search | </span>
				<span>Favourites</span>
			</div>
		)

	}
});

export default Nav;