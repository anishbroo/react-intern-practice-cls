import React from "react";

interface UserCard {
  username: string;
  age: number;
  address: string;
}

class PropsClassExample extends React.Component<UserCard> {
  render() {
    const { username, age, address } = this.props;
    return (
      <div>
        <h1>Example of props in class component</h1>
        <h2>
          Username: <i>{this.props.username}</i>
        </h2>
        <h2>
          Age: <i>{this.props.age}</i>
        </h2>
        <h2>
          Address: <i>{this.props.address}</i>
        </h2>
      </div>
    );
  }
}

export default PropsClassExample;
