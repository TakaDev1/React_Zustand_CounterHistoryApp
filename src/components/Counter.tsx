import React, { useState } from "react";
import { useCountStore } from "../stores/CounterStore";

const Counter = () => {
  const { count, stepCount, increment, decrement, setStepCount } = useCountStore();

  return (
    <div className=" px-5 py-5 w-full">
      <p className={`!mb-10 text-xl font-bold ${count >= 0 ? "text-green-500" : "text-red-500"}`}>
        Count: {count}
      </p>
      <input
        type="text"
        value={stepCount}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setStepCount(Number(event.target.value))
        }
        className="border py-2 text-center w-auto text-xl"
      />
      <button
        onClick={increment}
        className="px-4 py-2 ml-10 mr-2 rounded-lg bg-blue-500 text-white cursor-pointer hover:opacity-70"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="px-4 py-2 rounded-lg bg-red-500 text-white cursor-pointer hover:opacity-70"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
