import React from "react";
import ContactList from './contact_list';
import Nav from './nav';

var App = React.createClass({
	getInitialState: function(){
		return (
			
		)
	},
	render: function() {
		return (
			<div>
				<Nav />
				<h2>Little Black Book</h2>
				<ContactList />
			</div>
		)
	}
});

export default App;