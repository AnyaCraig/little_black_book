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
				<span>{contact.unitNumber + " - " }</span>
				<span>{contact.streetNumName}</span>
				<p>{contact.city + ", " + contact.province + " " + contact.postalCode}</p>
				<p>{contact.country}</p>
				<p>{contact.emailAddress}</p>
				<p>{contact.website}</p>
				<span>Facebook: {contact.facebook} |</span>
				<span>Twitter: {contact.twitter} |</span>
				<span>Instagram: {contact.instagram}</span>

				<p>--------------------</p>

			</div>
		)
	}
});

export default Contact;
