// importing libraries, etc.
import React from "react";
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// importing custom components
import Header from "./header";
import NavLink from "./nav_link";

require('./scss/style.scss');
require('./scss/_normalize.scss');

// our parent component
// I've put in some dummy data for contacts so that we don't need to 
// add new ones every time we want to test it
var App = React.createClass({

	getInitialState: function() {
		return {
			searchTerm: "",
			defaultErrorMessage: "There are no results!",
			contacts: [],
		}
	},

	// add the current search term to state
	addSearchTerm: function (searchTerm) {
		this.setState({ searchTerm: searchTerm.toLowerCase() });
	},

	// the function which will add a new contact to state
	// when passed up from the AddNewContact component
	addContactToList: function(newContact) {
		console.log("addContact", newContact);
		// make a copy of the contacts array in state
 		var contactsCopy = Array.from(this.state.contacts);
 		
 		// concatenate our new contact item to the array and set state
 		this.setState({ contacts: contactsCopy.concat([newContact]) });

		browserHistory.push("/");
	},

	// delete a contact using the key (array index) to indentify it
	deleteContact: function(key) {
 		var contactsCopy = Array.from(this.state.contacts);

		contactsCopy.splice(key, 1);

		this.setState({
			contacts: contactsCopy
		});

		browserHistory.push("/");

	},

	redirectToHome: function() {
		browserHistory.push("/");
	},

	render: function(){

		return (
			<div className="appContainer clearfix">
				
				{/* the header with the search input and logo */}

				<Header searchTerm={ this.state.searchTerm } onAddSearchTerm={(searchTerm) => this.addSearchTerm(searchTerm)}/>
				
				<div className="main">

					{/* the navigation sidebar */}
					<aside>

						{/* the navigation link components */}
						<nav>
							<ul>
								<li><Link to="/">My contacts</Link></li>
								<li><Link to="/favourites">My favourites</Link></li>
							</ul>
						</nav>
       					 
					</aside>
					
					{/* the main display area */}
					<div className="content">
						
						{ React.cloneElement(this.props.children, {
					    	searchTerm: this.state.searchTerm,
					        contacts: this.state.contacts,
					        onAddContact: this.addContactToList,
					        errorMessage: this.state.defaultErrorMessage,
					        title: "Contacts",
					        onDeleteContact: this.deleteContact,
					        redirectToHome: this.redirectToHome,
					    })}

					</div> 
				</div> 
			</div> 
		)
	}
});

export default App;
