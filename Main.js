import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {

	render() {
		const pi = 3.14;
		const weekdays = ["Mon","Tue","Wed","Thus","Fri"];
		const today = "Mon  21st November, 2017";

		//JSX code in return function
		return (

			<div>
				<h1>Hello Topcoder Community!</h1>
				<a className="TC">The value of pi is: {pi}</a>
				<ul>Weekdays:- <br/>
					{weekdays.map(day => <li>{day}</li>)}
				</ul>
				<div>
					Today:- <b>{today}</b>
				</div>
			</div>
		);
	}
}

render(<Hello/>, document.getElementById('app'));