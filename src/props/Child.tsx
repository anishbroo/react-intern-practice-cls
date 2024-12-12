import React from "react";

class Child extends React.Component<{ message: string }> {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

export default Child;
