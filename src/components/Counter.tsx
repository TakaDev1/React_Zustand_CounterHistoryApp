import React, { useState } from 'react';
import { useCountStore } from '../stores/CounterStore';

const Counter = () => {
  const {count, stepCount, increment, decrement, setStepCount} = useCountStore();

  return (
    <div>
      <p>Count: {count}</p>
      <input type="text" value={stepCount} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setStepCount(Number(event.target.value))} />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;