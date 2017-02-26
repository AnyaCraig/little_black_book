import React from "react";
import ContactPreview from "./contact_preview";
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

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

					<Link className="contactDetails" to={`/contact/${item.id}`} key={i}>
						<ContactPreview contactInfo={item} key={i} />
					</Link>
					
				))
			);

		} else {

			return (
			<div className="listEmpty">{this.props.errorMessage}</div>
			);
		}
	},

	render: function() {

		return (
			<div className="contactListContainer">

				<Link className="addContactBtn" to="/addcontact">+</Link>

				<h2>My {this.props.title}</h2>

				{/* run the function to check if the list is empty and render the list if not empty */}
				{ this.renderContactsList(this.props.contacts) }
	
			</div>
		);
	}
});

module.exports = ContactList;
