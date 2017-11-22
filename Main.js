import React from 'react';
import { render } from 'react-dom';
import {NewC} from './NewC'

class Hello extends React.Component {

	//Defining state in a Component
	constructor() {

		super();
		this.state = {Handle: "b_richie"}
	}

	render() {
		const pi = 3.14;
		const weekdays = ["Mon","Tue","Wed","Thus","Fri"];
		const today = "Mon  22nd November, 2017";

		//JSX code in return function
		return (

			<div>
				<h1>Hello Topcoder Community!</h1>
				<h2>My Topcoder handle is {this.state.Handle}</h2>

				<a className="TC">The value of pi is: {pi}</a>

				<ul>Weekdays:- <br/>
					{weekdays.map((weekdays, index) => (
						<li key={index}>{weekdays}</li>
					))}
				</ul>

				<div>
					Date:- <b>{today}</b>
				</div>

				<NewC Name={"TOPCODER"} pi = {pi}/>

			</div>
		);
	}
}

render(<Hello/>, document.getElementById('app'));
