// importing libraries, etc.
import React from "react";
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import firebase from "firebase";

// importing custom components
import Header from "./header";

require('./scss/style.scss');
require('./scss/_normalize.scss');

// our parent component
var App = React.createClass({

	getInitialState: function() {
		return {
			searchTerm: "",
			defaultErrorMessage: "There are no results!",
			contacts: [
			],
		}
	},

	// add the current search term to state
	addSearchTerm: function (searchTerm) {
		this.setState({ searchTerm: searchTerm.toLowerCase() });
	},

	// the function which will add a new contact to Firebase
	// when passed up from the AddNewContact component
	addContactToList: function(newContact) {

		// our firebase ref (the contacts key/list)
 		const firebaseRef = firebase.database().ref('contacts');

		// push our new contact into our Firebase contacts list
 		firebaseRef.push(newContact);

		// redirect to main page (contacts list)
		this.redirectToHome();
	},

	// delete a contact using the firebase key to indentify it
	deleteContact: function(key) {

		// our firebase ref (the actual contact in firebase)
		const firebaseRef = firebase.database().ref('contacts/' + key);

		// remove this contact from the firebase contacts list
		firebaseRef.remove();
		
		// redirect to main page (contacts list)
		this.redirectToHome();

	},

	// redirect to the main page
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

						{/* the navigation links */}
						<nav>
							<ul>
								<li><Link to="/">My contacts</Link></li>
								<li><Link to="/favourites">My favourites</Link></li>
							</ul>
						</nav>
       					 
					</aside>
					
					{/* the main display area */}
					<div className="content">
						
						{/* passing props to all the child components */}
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
	},

	// called after our component renders
	componentDidMount() {


		const firebaseRef = firebase.database().ref('contacts');

		// update our state when a contact is added to firebase
		// also add all contacts in state on app load
		firebaseRef.on("child_added", (snapshot) => {
			const contact = snapshot.val();

			// add the firebase key to the contact object
			contact.id = snapshot.key;

		  	this.setState({ contacts: this.state.contacts.concat([contact])});
		});
		
		// update our state when a contact is deleted from firebase
		firebaseRef.on('child_removed', (child) => {
		    const newContactList = this.state.contacts.filter(
		      	contact => contact.id != child.key);
		    this.setState({contacts: newContactList });
	    });

	}
});

export default App;
