import React from "react";
import Contact from "./contact";
import ContactPreview from "./contact_preview";
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// the list of contacts
var ContactList = React.createClass({

	// check if there are any contacts in the list
	// if there are, render the list
	// if there are none, render an error message
	renderContactsList: function(list, errorMessage) {

		if (list.length > 0) {

			return (
				// mapping over our contacts array and rendering out the Contact component for each contact in state. We pass the entire contact info object to the Contact component so that it can access it
				list.map((item, i) => (

					<Link className="contactDetails" to={`/contact/${i}`} key={i}>
						<ContactPreview contactInfo={item} key={i} />
					</Link>
					
					// just commenting out the detailed contact component below for now since we probably just want to render out a brief preview of each in the list (image, name)

				    //<Contact contactInfo={item} key={i} onDeleteContact={ (evt) => this.props.onDeleteContact(i) } />
					
				))
			);

		} else {

			return (
			<div className="listEmpty">{errorMessage}</div>
			);
		}
	},

	render: function() {

		// set the title based on whether we're showing favourites 
		// or general contacts
		var title = this.props.showFaves? "Favourites": "Contacts";

		// set the error message based on whether we're showing favourites
		// or search results
		var errorMessage = this.props.showFaves? 
			"You don't have any favourites!" :
			"Sorry, there are no results for your search.";

		var filteredList;
		var listToShow;

		if (this.props.showFaves == true) {
			filteredList = this.props.contacts.filter(
				(contact) => {
					return contact.favourite == true;
				}
			);
		} else {
			filteredList = this.props.contacts;
		}

		if (this.props.searchTerm !== "") {
			
			// filter out contacts who don't match the search term
			listToShow = filteredList.filter(
				(contact) => {
					const fullName = contact.firstName + ' ' + contact.middleName + ' ' + contact.lastName;

					const briefName = contact.firstName + ' ' + contact.lastName + ' ';


					return fullName.toLowerCase().indexOf(this.props.searchTerm) !== -1 
					||

					briefName.toLowerCase().indexOf(this.props.searchTerm) !== -1;
				}
			);
		} else {
			
			// if there is no search term, don't filter the list
			listToShow = filteredList;
		}

		return (
			<div className="contactListContainer">
				<Link className="addContactBtn" to="/addcontact">+</Link>
				<h2>My {title}</h2>
				
				{/* run the function to check if the list is empty */}
				{ this.renderContactsList(listToShow, errorMessage) }
	
			</div>
		);
	}
});

module.exports = ContactList;
