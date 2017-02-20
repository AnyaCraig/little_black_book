import React from "react";

import Contact from "./contact";
import ContactPreview from "./contact_preview";

// a list of favourites
var Favourites = React.createClass({

	renderFavourites: function(list) {

		// if the list has anything in it, map over the contacts in the list
		if (list.length > 0) {

			return (
				// mapping over our contacts array and rendering out the Contact component for each contact in state. We pass the entire contact info object to the Contact component so that it can access it
				list.map((item, i) => (
					
				    <ContactPreview contactInfo={item} key={i} />
				    
				    // just commenting out the full contact profile for now
				    //<Contact contactInfo={item} key={i} />
				
				))
			);

		} else {

			// otherwise, return an error message
			return (
			<div className="listEmpty">You don't have any favourites!</div>
			);
		}


	},

	render: function() {

		// filter the list of contacts so that only those who are favourites are left
		var favourites = this.props.contacts.filter(
			(contact) => {
				return contact.favourite == true;
			}
		);

		return (
			<div className="favouritesContainer">
				<h2>My favourites</h2>
				
				{/* the function to render the list */}
				{ this.renderFavourites(favourites) }
		
			</div>
		);
	}
});

export default Favourites;
