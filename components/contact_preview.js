import React from "react";

// a little preview of each contact - profile image and name
var ContactPreview = React.createClass({
	render: function() {

		// this is hardcoded now, but we will use the uploaded profile images for this in the future
		var imgUrl = "https://static1.squarespace.com/static/52a8ac54e4b0ed42f38992bc/54291b52e4b0461906636fd6/54291cc6e4b0ba2859f439f8/1411980510775/?format=500w";

		// setting a variable to contain our background image styles
		var imageStyle = {
		           backgroundImage: 'url(' + imgUrl + ')'
		       }

		return (
			<div className="contactPreviewContainer">
				<div className="previewImage" style={imageStyle}></div>
				<span className="previewName">{this.props.contactInfo.firstName}</span>&nbsp;
				<span className="previewName">{this.props.contactInfo.middleName}</span>&nbsp;
				<span className="previewName">{this.props.contactInfo.lastName} </span>
			</div>
		)
	

	}
});

export default ContactPreview;