import React from "react";

interface State {
  count: number;
}

class ComponentWillUpdate extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // This will be called before the render method
  componentWillUpdate(nextProps: {}, nextState: State) {
    console.log("Component will update");
    console.log("Next count: ", nextState.count); // the count that will be used in the next render
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Example of componentWillUpdate</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Click</button>
      </div>
    );
  }
}

export default ComponentWillUpdate;
