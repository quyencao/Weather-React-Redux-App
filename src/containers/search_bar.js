import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };

		// Make this keyword in onInputChange method is SearchBar
		// So setState method is correctly
		this.onInputChange = this.onInputChange.bind(this);

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// We need to go and fetch weather data
		this.props.fetchWeather(this.state.term);

		// Clear search bar
		this.setState({ term : '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					onChange={this.onInputChange} 
					value={this.state.term} 
					className="form-control" 
					placeholder="Get a five-day forcast in your favorite city" />
				<span className="input-group-btn">
        			<button className="btn btn-info" type="submit">Submit</button>
      			</span>
			</form>
		);
	}
	
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather:fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
