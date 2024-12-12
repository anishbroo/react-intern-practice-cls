import React from "react";

interface State {
  name: string;
}

class ComponentDidUpdate extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      name: "Martinelli",
    };
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    console.log("component is updated");
  }

  increment = () => {
    this.setState({ name: "Gabriel" });
  };

  render() {
    return (
      <div>
        <h1>Example of componentDidUpdate</h1>
        <h3>{this.state.name}</h3>
        <button onClick={this.increment}>Click</button>
      </div>
    );
  }
}

export default ComponentDidUpdate;
