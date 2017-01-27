import React from "react";
import OtherGreeting from './other_greeting';


var HelloWorld = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hey there, world!</h1>
				<OtherGreeting />
			</div>
		)
	}
});

export default HelloWorld;