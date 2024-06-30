import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return { count, increment, decrement };
};
