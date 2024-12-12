import React, { Component } from "react";

//define the state type
interface CounterState {
  count: number; //variable with data type
}

class StateClass extends Component<{}, CounterState> {
  // using constructor
  constructor(props: {}) {
    super(props);

    //initializing state
    this.state = {
      count: 1,
    };
  }

  // //without using constructor
  // state = {
  //   count: 1,
  // };
  //method to initialize
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default StateClass;
