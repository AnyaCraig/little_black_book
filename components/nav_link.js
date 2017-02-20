import React from "react";

// the navigation link in the sidebar
var NavLink = React.createClass({
	render: function() {
		return <div className={this.props.classNames}>{this.props.linkName}</div>
	}
});

export default NavLink;