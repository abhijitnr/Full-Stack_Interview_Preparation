import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>

      <div>
        <button onClick={incrementCounter}>INCREMENT</button>
        <button onClick={decrementCount} disabled={count === 0}>
          DECREMENT
        </button>
      </div>
    </div>
  );
};

export default Counter;
