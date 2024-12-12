import React from "react";

class PropsClass extends React.Component<{ name: string }> {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name}! You're learning props in class component
        </h1>
      </div>
    );
  }
}

export default PropsClass;
