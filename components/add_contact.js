import React from "react";
import ReactDOM from 'react-dom';
import AvatarCropper from "react-avatar-cropper";


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
				pinterest: "",
				googlePlus: "",
				skype: "",
				birthday: "",
				companyName: "",
				jobTitle: "",
				relationship: "",
				notes: "",
				favourite: false
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

	// toggle whether the contact is a favourite
	isFavourite: function(evt) {

		// make a copy of the newContact object in state
		var newContactCopy = Object.assign(this.state.newContact);

		// toggle the favourite between true and false
		newContactCopy.favourite = !newContactCopy.favourite;

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

	// toggle whether an item is marked as completed or not
	toggleCompleted: function(i) {
	  var itemsCopy = Array.from(this.state.items);

	  itemsCopy[i].completed = !itemsCopy[i].completed;

	  this.setState({ items: itemsCopy });
	  
	},

	handleFileChange: function(dataURI) {
	    this.setState({
	      img: dataURI,
	      croppedImg: this.state.croppedImg,
	      cropperOpen: true
	    });
  	},

	handleFile: function(e) {
	    var reader = new FileReader();
	    var file = e.target.files[0];

	    if (!file) return;

	    reader.onload = function(img) {
	      ReactDOM.findDOMNode(this.refs.in).value = '';
	      this.handleFileChange(img.target.result);
	    }.bind(this);
	    reader.readAsDataURL(file);
	},

	render: function() {
		return (
			<div className="addContactContainer">

				<h2>Add a new contact</h2>
				
				{/* all the inputs for adding a contact */}

				<div className="fieldWrapper">
					<label htmlFor="firstName">Profile Image</label>
      				<input id="avatar" ref="in" type="file" accept="img/avatar/*" onChange={this.handleFile} />
				</div>
				<div className="fieldWrapper">
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName" value={ this.state.newContact.firstName } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="middleName">Middle Name</label>
					<input type="text" id="middleName" value={ this.state.newContact.middleName } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" value={ this.state.newContact.lastName } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="countryCode">Country Code</label>
					<input type="text" id="countryCode" value={ this.state.newContact.countryCode } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="phoneNumber">Phone Number</label>
					<input type="text" id="phoneNumber" value={ this.state.newContact.phoneNumber } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="streetNumName">Street Number and Name</label>
					<input type="text" id="streetNumName" value={ this.state.newContact.streetNumName } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="unitNumber">Unit Number</label>
					<input type="text" id="unitNumber" value={ this.state.newContact.unitNumber } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="city">City</label>
					<input type="text" id="city" value={ this.state.newContact.city } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="province">Province or State</label>
					<input type="text" id="province" value={ this.state.newContact.province } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="postalCode">Postal Code</label>
					<input type="text" id="postalCode" value={ this.state.newContact.postalCode } onChange = { (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="country">Country</label>
					<input type="text" id="country" value={ this.state.newContact.country } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="emailAddress">Email Address</label>
					<input type="text" id="emailAddress" value={ this.state.newContact.emailAddress } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="website">Website</label>
					<input type="text" id="website" value={this.state.newContact.website} onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="facebook">Facebook</label>
					<input type="text" id="facebook" value={ this.state.newContact.facebook } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="twitter">Twitter</label>
					<input type="text" id="twitter" value={ this.state.newContact.twitter } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="instagram">Instagram</label>
					<input type="text" id="instagram" value={ this.state.newContact.instagram } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="pinterest">Pinterest</label>
					<input type="text" id="pinterest" value={ this.state.newContact.pinterest } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="googlePlus">Google&#43;</label>
					<input type="text" id="googlePlus" value={ this.state.newContact.googlePlus } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="skype">Skype ID</label>
					<input type="text" id="skype" value={ this.state.newContact.skype } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="birthday">Birthday</label>
					<input type="text" id="birthday" placeholder="DD/MM/YYYY" value={ this.state.newContact.birthday } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="companyName">Company Name</label>
					<input type="text" id="companyName" value={ this.state.newContact.companyName } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="jobTitle">Job Title</label>
					<input type="text" id="jobTitle" value={ this.state.newContact.jobTitle } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="relationship">Relationship</label>
					<input type="text" id="relationship" value={ this.state.newContact.relationship } onChange={ (evt) => this.saveToState(evt) } />
				</div>

				<div className="fieldWrapper">
					<label htmlFor="notes">Notes</label>
					<textarea type="text" id="notes" value={ this.state.newContact.notes } onChange={ (evt) => this.saveToState(evt) }></textarea>
				</div>
				
				<div className="fieldWrapper">
					<label htmlFor="favourite">Add to favourites</label>
					
					{/* checkbox for favouriting a contact */}
					<input 	type="checkbox" 
							onChange={(evt) => this.isFavourite(evt)}
							checked={this.state.newContact.favourite}  
							id="favourite" />

				</div>

				{/* the button to add the new contact */}
				<button onClick={() => this.addNewContact()}>Add contact</button>

			</div>
		)
	}
});

module.exports = AddContact;
