import React from 'react';
import { useState } from 'react';

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const unusedVariable = 'this will trigger eslint';
  const badVar = 'use const instead';

  console.log('remove me');

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: '20px', margin: '10px' }}>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default TestComponent;
