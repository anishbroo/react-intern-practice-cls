import React from "react";

interface propsArray {
  num: number[];
}

class ArrayProps extends React.Component<propsArray> {
  render() {
    const { num } = this.props;
    return (
      <div>
        <h2>Number list using array props</h2>
        <ul>
          {num.map((num, index) => (
            <li>{num}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ArrayProps;
