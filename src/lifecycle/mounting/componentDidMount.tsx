import React from "react";
import { setTimeout } from "timers/promises";

interface declare {
  food: string;
}

class ComponentDidMount extends React.Component<{}, declare> {
  constructor(props: {}) {
    super(props);

    this.state = {
      food: "pizza",
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ food: "french fries" });
    }, 2000);

    window.setTimeout(() => {
      this.setState({ food: "burger" });
    }, 4000);
  }

  render() {
    return (
      <div>
        <h1>Example of Component Did Mount</h1>
        <h3>My favourite food is {this.state.food}</h3>
      </div>
    );
  }
}

export default ComponentDidMount;
