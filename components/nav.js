import React from "react";

<<<<<<< HEAD

var Nav = React.createClass({
	render: function() {
		return <div>
			<p>Contacts</p>
			<p>Search</p>
			<p>Favourites</p>
		</div>
=======
var Nav = React.createClass({
	render: function() {
		return (
			<div className="nav-container">

				<span>Contacts | </span>
				<span>Search | </span>
				<span>Favourites</span>
			</div>
		)
>>>>>>> e55c2fe47773ed661865907c8070b5cd5af8ade2
	}
});

export default Nav;