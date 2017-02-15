import React from "react";

var Contact = React.createClass({

	render: function() {
		
		// setting the contact info object from props as a variable
		// so that it's quicker to access in our JSX
		var contact = this.props.contactInfo;

		return (
			<div className="contact-container">

				{/* show the contact information */}
				<p>{contact.firstName + " " + contact.middleName + " " + contact.lastName}</p>
				<p>{contact.countryCode + " " + contact.phoneNumber}</p>
				{ contact.unitNumber && <span>{contact.unitNumber + " - " }</span> }
				<span>{contact.streetNumName}</span>
				<p>{contact.city + ", " + contact.province + " " + contact.postalCode}</p>
				<p>{contact.country}</p>
				<p>{contact.emailAddress}</p>
				<p>{contact.website}</p>
				<p>Facebook: {contact.facebook} |<br />
				Twitter: {contact.twitter} |<br />
				Instagram: {contact.instagram}</p>

				<button onClick={ this.props.onDeleteContact }>Delete</button>

				<p>--------------------</p>

			</div>
		)
	}
});

export default Contact;
