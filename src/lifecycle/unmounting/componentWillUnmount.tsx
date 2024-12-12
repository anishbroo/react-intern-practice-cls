import React from "react";

class ComponentWillUnmount extends React.Component {
  timerId: any;

  componentDidMount() {
    this.timerId = setInterval(() => {
      console.log("Timer started");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);

    console.log("Timer stopped");
  }

  render() {
    return <div>Open the console to see logs</div>;
  }
}

export default ComponentWillUnmount;
