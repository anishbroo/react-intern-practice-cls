import React, { Component } from "react";

interface displayName {
  name: string;
}

class StateClassExample extends Component<{}, displayName> {
  constructor(props: {}) {
    super(props);

    this.state = {
      name: "Rameshor",
    };
  }

  display = () => {
    this.setState({ name: "Riti" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.display}>Change</button>
      </div>
    );
  }
}

export default StateClassExample;
