import React from "react";

import ContactList from "./contact_list";

// a component to filter the contacts list by search term
var SearchFilter = React.createClass({

	filterBySearchTerm: function(list, searchTerm) {

		var filteredBySearchTerm;
		
		if (searchTerm === "" ) {

			filteredBySearchTerm = list;

		} else {

			// filter out contacts who don't match the search term
			filteredBySearchTerm = list.filter(
				(contact) => {
					const fullName = contact.firstName + ' ' + contact.middleName + ' ' + contact.lastName;

					const briefName = contact.firstName + ' ' + contact.lastName + ' ';


					return fullName.toLowerCase().indexOf(this.props.searchTerm) !== -1 
					||

					briefName.toLowerCase().indexOf(this.props.searchTerm) !== -1;
				}
			);
		}

		return filteredBySearchTerm;

	},

	render: function() {

		return (
				
			<ContactList title={ this.props.title } errorMessage={ this.props.errorMessage } contacts={this.filterBySearchTerm(this.props.contacts, this.props.searchTerm)}/>
		);
	}
});

module.exports = SearchFilter;
