import React from "react";

interface cons {
  count: number;
}

class Constructor extends React.Component<{}, cons> {
  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Mounting Phase:</h1>
        <h2>Example of constructor</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Constructor;
