import React from "react";
import ChildC from "./ChildC";

class ParentC extends React.Component {
  state = { message: "Initial message" };

  updateMessage = (newMessage: string) => {
    this.setState({ message: newMessage });
  };
  render() {
    return (
      <div>
        <h1>Child To Parent</h1>
        <h3>{this.state.message}</h3>
        <ChildC updateMessage={this.updateMessage} />
      </div>
    );
  }
}

export default ParentC;
