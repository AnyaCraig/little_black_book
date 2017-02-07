// importing libraries, etc.
import React from "react";

// importing custom components
import Contact from "./contact";
import Nav from "./nav.js";
import AddContact from "./add_contact";

// our parent component
// I've put in some dummy data for contacts so that we don't need to 
// add new ones every time we want to test it
var App = React.createClass({

	getInitialState: function() {
		return {
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
				},
			],
		}
	},

	// the function which will add a new contact to state
	// when passed up from the AddNewContact component
	addContact: function(newContact) {

		// make a copy of the contacts array in state
 		var contactsCopy = Array.from(this.state.contacts);
 		
 		// concatenate our new contact item to the array and set state
 		this.setState({ contacts: contactsCopy.concat([newContact]) });
	},

	render: function(){
		return (
			<div className="app-container">
				
				{/* this Nav component has only dummy content so far.
				It doesn't actually work */}
				<Nav />

				<div className="contact-list">
					<h2>My contacts</h2>
					
					{/* mapping over our contacts array and rendering out the Contact component for each contact in state. We pass the entire contact info object to the Contact component so that it can access it*/}
					{this.state.contacts.map((item, i) => (
						
					    <Contact contactInfo={item} key={i} />
					))}

				</div>
				
				{/* the AddContact component */}
				<AddContact onAddContact={(newContact) => this.addContact(newContact)}/>
			
			</div>
		)
	}
});

export default App;
