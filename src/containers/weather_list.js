import React, {Component} from 'react';

import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	renderWeather(cityData) {

		const temps = cityData.list.map((weather) => weather.main.temp);

		const pressures = cityData.list.map((weather) => weather.main.pressure);

		const humidities = cityData.list.map((weather) => weather.main.humidity);

		//const lat = cityData.city.coord.lat;

		//const lon = cityData.city.coord.lon;

		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={cityData.city.id} >
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart data={temps} color="orange" unit="K" /></td>
				<td><Chart data={pressures} color="green" unit="hPa" /></td>
				<td><Chart data={humidities} color="blue" unit="%" /></td>
			</tr>
		);
	}

	render() {
		return(
			<table className="table table-hover table-bordered">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}){
	return { weather }; // {weather} => {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);