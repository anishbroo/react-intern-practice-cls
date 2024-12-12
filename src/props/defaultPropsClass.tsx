import React from "react";

interface propsDefault {
  name: string;
}

class DefaultProps extends React.Component<propsDefault> {
  static defaultProps = {
    name: "Ram",
  };

  render() {
    return (
      <div>
        <h1>Default Props in class component</h1>
        <h3>Hello, {this.props.name}</h3>
      </div>
    );
  }
}

export default DefaultProps;
