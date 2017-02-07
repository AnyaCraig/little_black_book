import React from "react";

var AddContact = React.createClass({
	
	getInitialState: function() {
		return {
			newContact: {
				firstName:"",
				middleName: "",
				lastName:"",
				countryCode: "",
				phoneNumber: "",
				streetNumName: "",
				unitNumber: "",
				city: "",
				province: "",
				postalCode: "",
				country: "",
				emailAddress: "",
				website: "",
				facebook: "",
				twitter: "",
				instagram: "",
			},
			errorMessage: "",
		}
	},

	// store contact data in state
	// until we push the new contact up to our parent state
	saveToState: function(evt) {

		// make a copy of the newContact object in state
		var newContactCopy = Object.assign(this.state.newContact);

		// set the corresponding key of that object to our input's value
		newContactCopy[evt.target.id] = evt.target.value;
		
		// replace the newContact object in state with our altered copy
		this.setState({ newContact: newContactCopy});
	},

	// push the new contact to parent state
	addNewContact: function() {
		
		// check whether at least a first and last name have been added
		// if so, push the new contact object up to parent state
		// if not, console.log an error message
		if (this.state.newContact.firstName !== "" && this.state.newContact.lastName !== "") {
			this.props.onAddContact(this.state.newContact);
		
		} else {
			console.log("You didn't enter a name!");
		}

	},

	render: function() {
		return (
			<div className="add-contact-container">

				<h2>Add a New Contact</h2>
				
				{/* all the inputs for adding a contact */}

				<label htmlFor="firstName">First Name</label>
				<input type="text" id="firstName" value={ this.state.newContact.firstName } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="middleName">Middle Name</label>
				<input type="text" id="middleName" value={ this.state.newContact.middleName } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="lastName">Last Name</label>
				<input type="text" id="lastName" value={ this.state.newContact.lastName } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="countryCode">Country Code</label>
				<input type="text" id="countryCode" value={ this.state.newContact.countryCode } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="phoneNumber">Phone Number</label>
				<input type="text" id="phoneNumber" value={ this.state.newContact.phoneNumber } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="streetNumName">Street Number and Name</label>
				<input type="text" id="streetNumName" value={ this.state.newContact.streetNumName } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="unitNumber">Unit Number</label>
				<input type="text" id="unitNumber" value={ this.state.newContact.unitNumber } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="city">City</label>
				<input type="text" id="city" value={ this.state.newContact.city } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="province">Province or State</label>
				<input type="text" id="province" value={ this.state.newContact.province } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="postalCode">Postal Code</label>
				<input type="text" id="postalCode" value={ this.state.newContact.postalCode } onChange = { (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="country">Country</label>
				<input type="text" id="country" value={ this.state.newContact.country } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="emailAddress">Email Address</label>
				<input type="text" id="emailAddress" value={ this.state.newContact.emailAddress } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="website">Website</label>
				<input type="text" id="website" value={this.state.newContact.website} onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="facebook">Facebook</label>
				<input type="text" id="facebook" value={ this.state.newContact.facebook } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="twitter">Twitter</label>
				<input type="text" id="twitter" value={ this.state.newContact.twitter } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				<label htmlFor="instagram">Instagram</label>
				<input type="text" id="instagram" value={ this.state.newContact.instagram } onChange={ (evt) => this.saveToState(evt) } />
				<br />

				{/* the button to add the new contact */}
				<button onClick={this.addNewContact}>Add contact</button>
			</div>
		)
	}
});

export default AddContact;
