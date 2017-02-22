import React from "react";

// the search input and search functionality
var Search = React.createClass({

	render: function() {
		return (
			<div className="searchContainer">
				<input 	value={this.props.searchTerm} 
						onChange={(evt) => this.props.onAddSearchTerm(evt.target.value)
						} />
				<svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.64 494.64">
					<path d="M280,278a153,153,0,1,0-2,2L448,450M357,333,467,443l-26,26L331,359" transform="translate(0.18 0.18)"/>
				</svg>
			</div>
		)
	}
});

export default Search;
