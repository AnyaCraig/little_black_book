import React from "react";
import ContactList from "./contact_list";
import Nav from "./nav.js";
import AddContact from "./add_contact";

var App = React.createClass({
	render: function(){
		return (
			<div>
				<Nav />
				<ContactList />
				<p>hello there!</p>
				<AddContact />
			</div>
		)
	}
});

export default App;