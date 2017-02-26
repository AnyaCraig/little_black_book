import React from "react";

import SearchFilter from "./search_filter";

// a component to filter the contacts list by favourites
var Favourites = React.createClass({

	filterFavourites: function(contactList) {

		// filter the list of contacts so that only those who are favourites are left
		var favourites = contactList.filter(
			(contact) => {
				return contact.favourite == true;
			}
		);
	
		// return the list of favourites
		return favourites;
	},

	render: function() {

		var errorMessage = "You don't have any favourites!";
		var title = "Favourites";

		return (
				
				// pass the filtered list to the SearchFilter component
				// so that it can be filtered by search term
				<SearchFilter contacts={this.filterFavourites(this.props.contacts)} title={title} errorMessage={errorMessage} searchTerm = {this.props.searchTerm}/>
		);
	}
});

module.exports = Favourites;
