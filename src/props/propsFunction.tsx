import React from "react";

interface functionProps {
  name: string;
  age: number;
  address: string;
  contact: number;
}

const PropsFunction: React.FC<functionProps> = ({
  name,
  age,
  address,
  contact,
}) => {
  return (
    <div>
      <h1>Props in functional components</h1>
      <h3>
        Name: <i>{name}</i>
      </h3>
      <h3>
        Age: <i>{age}</i>
      </h3>
      <h3>
        Address: <i>{address}</i>
      </h3>
      <h3>
        Contact: <i>{contact}</i>
      </h3>
    </div>
  );
};

export default PropsFunction;
