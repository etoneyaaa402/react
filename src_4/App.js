import React from 'react';
import './App.css';
import Calendarr from './components';

export default class App extends React.Component {
	state = {
		date: null
	};

	handleDateChange = date => this.setState({ date });

	render() {
		const { date } = this.state;

		return (
			<div>
				{date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}

				<Calendarr
					onChange={this.handleDateChange}
				/>
			</div>
		);
	}
}
