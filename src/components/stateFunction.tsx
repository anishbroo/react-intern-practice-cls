import React, { useState } from "react";

const StateFunction: React.FC = () => {
  //Declaring state with initial value 0
  const [count, setCount] = useState(0);

  //Function to handle increment
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default StateFunction;
