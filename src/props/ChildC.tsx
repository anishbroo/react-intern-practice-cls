import React from "react";

class ChildC extends React.Component<{
  updateMessage: (newMessage: string) => void;
}> {
  handleClick = () => {
    this.props.updateMessage("Updated message from child");
  };

  render() {
    return <button onClick={this.handleClick}>Update</button>;
  }
}

export default ChildC;
