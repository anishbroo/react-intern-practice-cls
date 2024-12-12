import React from "react";

interface datatypes {
  country: string;
}

interface props {
  desh: string;
}

class GetDerivedStateFromProps extends React.Component<props, datatypes> {
  constructor(props: props) {
    super(props);

    this.state = {
      country: "Nepal",
    };
  }

  static getDerivedStateFromProps(props: props, state: datatypes) {
    return { country: props.desh };
  }

  render() {
    return (
      <div>
        <h1>Example of get derived state from props</h1>
        <h3>{this.state.country}</h3>
      </div>
    );
  }
}

export default GetDerivedStateFromProps;
