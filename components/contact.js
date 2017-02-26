import React from "react";
import { browserHistory } from 'react-router';
import closeBtn from './img/closeBtn.png';



var Contact = React.createClass({

	render: function() {
		
		// setting the contact info object from props as a variable
		// so that it's quicker to access in our JSX
		var contact = this.props.contacts[this.props.params.id];

		return (
			<div className="contactContainer">

				<button className="closeBtn" onClick={ (evt) => this.props.redirectToHome() }><img className="closeBtn" src={ closeBtn} /></button>

				{/* show the contact information */}
				<h2>{contact.firstName + " " + contact.middleName + " " + contact.lastName}</h2>
				<p>{contact.emailAddress}</p>
				<p>({contact.countryCode + ") " + contact.phoneNumber}</p>
				<p>{ contact.unitNumber && contact.unitNumber + " - " } {contact.streetNumName}<br />
				{contact.city + ", " + contact.province + " " + contact.postalCode}<br />
				{contact.country}</p>
				<p>{contact.website}</p>
				<p>Facebook: {contact.facebook} <br />
				Twitter: {contact.twitter} <br />
				Instagram: {contact.instagram}</p>

				<button onClick={ (evt) => this.props.onDeleteContact(this.props.params.id) }>Delete</button>
				
			</div>
		)
	}
});

export default Contact;
