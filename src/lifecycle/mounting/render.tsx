import exp from "constants";
import React from "react";

interface list {
  fruits: string[];
}

class Render extends React.Component<list> {
  render() {
    const { fruits } = this.props;
    return (
      <div>
        <h1>Example of Render</h1>
        <h3>
          <ul>
            {fruits.map((fruits, index) => (
              <li>{fruits}</li>
            ))}
          </ul>
        </h3>
      </div>
    );
  }
}

export default Render;
