import React from "react";

// the search input and search functionality
var Search = React.createClass({

	getInitialState: function() {
		return {
			searchTerm: "",
		}
	},

	// check if the key pressed was enter
	// if it IS enter, push the searchTerm in this child state up to parent state
	// if it's not enter, do nothing
	checkEnter: function(evt) {

	  if(evt.keyCode === 13){

	    this.props.onAddSearchTerm(this.state.searchTerm);
	  
	  } else {
	  	
	    return false;

	  }
	},
	
	// update the searchTerm in state every time the input changes
	updateSearchTerm: function(evt) {
		this.setState({searchTerm: evt.target.value });
	},

	render: function() {
		return (
			<div className="searchContainer">
				<input 	value={this.state.searchTerm} 
						onKeyDown={(evt) => this.checkEnter(evt)}
						onChange={(evt) => this.updateSearchTerm(evt)
						} />
				<svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.64 494.64">
					<path d="M280,278a153,153,0,1,0-2,2L448,450M357,333,467,443l-26,26L331,359" transform="translate(0.18 0.18)"/>
				</svg>
			</div>
		)
	}
});

export default Search;
