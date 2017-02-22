import React from "react";
import Contact from "./contact";
import ContactPreview from "./contact_preview";

// the list of contacts
var ContactList = React.createClass({

	// check if there are any contacts in the list
	// if there are, render the list
	// if there are none, render an error message
	renderContactsList: function(list) {

		if (list.length > 0) {

			return (
				// mapping over our contacts array and rendering out the Contact component for each contact in state. We pass the entire contact info object to the Contact component so that it can access it
				list.map((item, i) => (

					<ContactPreview contactInfo={item} key={i} />
					
					// just commenting out the detailed contact component below for now since we probably just want to render out a brief preview of each in the list (image, name)

				    //<Contact contactInfo={item} key={i} onDeleteContact={ (evt) => this.props.onDeleteContact(i) } />
					
				))
			);

		} else {

			return (
			<div className="listEmpty">Sorry, that search didn't return any results!</div>
			);
		}
	},


	render: function() {

		var filteredList;

		if (this.props.searchTerm !== "") {
			
			// filter out contacts who don't match the search term
			filteredList = this.props.contacts.filter(
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
			filteredList = this.props.contacts;
		}

		return (
			<div className="contactListContainer">
				<h2>My contacts</h2>
				
				{/* run the function to check if the list is empty */}
				{ this.renderContactsList(filteredList) }
	
			</div>
		);
	}
});

export default ContactList;
