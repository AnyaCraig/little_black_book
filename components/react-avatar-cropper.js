import React from "react";
import ReactBootstrap from 'react-bootstrap';

const AvatarCropper = React.createClass({
	getInitialState: function() {
	    return {
	      cropperOpen: false,
	      img: null,
	      croppedImg: "./img/avatar/pic.png"
	    };
	},
	handleFileChange: function(dataURI) {
	    this.setState({
	      img: dataURI,
	      croppedImg: this.state.croppedImg,
	      cropperOpen: true
	    });
	},

	handleCrop: function(dataURI) {
	    this.setState({
	      cropperOpen: false,
	      img: null,
	      croppedImg: dataURI
	    });
	},
	
	handleRequestHide: function() {
	    this.setState({
	      cropperOpen: false
	    });
	},

	render () {
    	return (
      		<div>

		        <div className="avatar-photo">
		          	<FileUpload handleFileChange={this.handleFileChange} />
		          	<div className="avatar-edit">
			            <span>Click to Pick Avatar</span>
			            <i className="fa fa-camera"></i>
		          	</div>
		          	<img src={this.state.croppedImg} />
		        </div>

        		{this.state.cropperOpen &&
			        <AvatarCropper
			            onRequestHide={this.handleRequestHide}
			            cropperOpen={this.state.cropperOpen}
			            onCrop={this.handleCrop}
			            image={this.state.img}
			            width={100}
			            height={100}
			        />
        		}
      		</div>
    	);
  	}

});


export default AvatarCropper;