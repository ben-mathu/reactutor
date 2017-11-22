import React from "react";
import PropTypes from "prop-types";

export class NewC extends React.Component {

  //Passing props to the state contructor
  constructor(props) {

    super();

    this.state = {PIValue: props.pi,count:1

    };
  }

  //function that handle button click event
  addPIvalue() {

    this.setState({

      PIValue: this.state.PIValue + this.props.pi,
      count: this.state.count + 1
    });
  }

  subPIvalue() {

    this.setState({

      PIValue: this.state.PIValue - this.props.pi,
      count: this.state.count + 1
    });
  }

  render() {

    return(

      <div>
        <h2>In a child Component</h2>
        <p>Prop passed from parent component is {this.props.Name}</p>

        <button onClick={()=> this.addPIvalue()}>Add PI Value</button>
        <button onClick={()=> this.subPIvalue()}>Subtract PI Value</button>

        <h3>Value of PI is {this.props.pi}</h3>

        <p>Value of <b>{this.state.count}</b> PI is <b>{this.state.PIValue}</b></p>
      </div>
    );
  }
}

NewC.PropTypes = {Name: React.PropTypes.string,
  pi: React.PropTypes.number};
