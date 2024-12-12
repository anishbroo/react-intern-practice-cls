import React from "react";

interface define {
  count: number;
}

class ShouldComponentUpdate extends React.Component<{}, define> {
  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps: {}, nextState: define) {
    if (nextState.count % 3 == 0) {
      return true;
    }
    return false;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Example of shouldComponentUpdate</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Click</button>
      </div>
    );
  }
}

export default ShouldComponentUpdate;
