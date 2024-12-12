import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  render() {
    return <Child message="I am from parent class" />;
  }
}

export default Parent;
