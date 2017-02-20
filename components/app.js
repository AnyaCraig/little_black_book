// importing libraries, etc.
import React from "react";

// importing custom components
import ContactList from "./contact_list";
import Header from "./header";
import AddContact from "./add_contact";
import Favourites from "./favourites";
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
			contacts: [
				{
					firstName:"Alice",
					middleName: "Mae",
					lastName:"Kilgour",
					countryCode: "1",
					phoneNumber: "455-344-9875",
					streetNumName: "29 Dawson Crescent",
					unitNumber: "219",
					city: "Lowell",
					province: "Manitoba",
					postalCode: "M2M 0L3",
					country: "Canada",
					emailAddress: "amkilgour@rmail.com",
					website: "www.alicekilgour.com",
					facebook: "alicekilgour",
					twitter: "@alicekilgour",
					instagram: "alicesnaps",
					favourite: false,
				},
				{
					firstName:"Mitesh",
					middleName: "Alvin",
					lastName:"Kumar",
					countryCode: "2",
					phoneNumber: "748-373-9000",
					streetNumName: "34 Pondicherry Lane",
					unitNumber: "45",
					city: "Summerside",
					province: "Prince Edward Island",
					postalCode: "TM6 5K9",
					country: "Canada",
					emailAddress: "miteshk@rotmail.com",
					website: "www.mitesh.com",
					facebook: "miteshkumar",
					twitter: "@miteshkumar",
					instagram: "miteshk",
					favourite: true,
				},
				{
					firstName:"Olivia",
					middleName: "Grace",
					lastName:"Huang",
					countryCode: "2",
					phoneNumber: "875-998-0900",
					streetNumName: "987 Fountain Glen Road",
					unitNumber: "",
					city: "Brantford",
					province: "Ontario",
					postalCode: "M2P 3M7",
					country: "Canada",
					emailAddress: "ohuang@rmail.com",
					website: "www.olivingthedream.com",
					facebook: "oliviahuang",
					twitter: "@oliviahuang",
					instagram: "olivingthedream",
					favourite: true,
				},
			],
		}
	},

	// add the current search term to state
	addSearchTerm: function (searchTerm) {
		this.setState({ searchTerm: searchTerm.toLowerCase() });
	},

	// the function which will add a new contact to state
	// when passed up from the AddNewContact component
	addContact: function(newContact) {

		// make a copy of the contacts array in state
 		var contactsCopy = Array.from(this.state.contacts);
 		
 		// concatenate our new contact item to the array and set state
 		this.setState({ contacts: contactsCopy.concat([newContact]) });
	},

	// delete a contact using the key (array index) to indentify it
	deleteContact: function(key) {
 		var contactsCopy = Array.from(this.state.contacts);

		contactsCopy.splice(key, 1);

		this.setState({
			contacts: contactsCopy
		});
	},

	render: function(){

		return (
			<div className="appContainer clearfix">
				
				{/* the header with the search input and logo */}
				<Header onAddSearchTerm={(searchTerm) => this.addSearchTerm(searchTerm)}/>
				
				<div className="main">

					{/* the navigation sidebar */}
					<aside>

						{/* the navigation link components */}
						<NavLink classNames="sidebarLink contactsListLink" linkName={ "My Contacts" } />
					
						<NavLink classNames="sidebarLink favouritesLink" linkName={ "My Favourites "} />
			
						<NavLink classNames="sidebarLink groupsLink" linkName={ "My Groups" } />
					</aside>
					
					{/* the main display area */}
					<div className="content">

						{/* our actual list of contacts */}
						<ContactList 	contacts={ this.state.contacts }
										searchTerm = {this.state.searchTerm} 
										onDeleteContact={ (i) => this.deleteContact(i) }/>
						
						{/* a list of favourite contacts */}
						<Favourites contacts={this.state.contacts}/>

						{/* the AddContact component */}
						<AddContact onAddContact={(newContact) => this.addContact(newContact)}/>

					</div> 
				</div> 
			</div> 
		)
	}
});

export default App;
