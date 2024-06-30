// https://bigfrontend.dev/react/The-React-Counter

// As the first React problem, you are asked to create the famous Counter app.

// 1. counter starts from 0.
// 2. click the '+' button to increment.
// 3. click the '-' button to decrement.
// data-testid is used to test your code, please do not remove them.

import { useCounter } from "./useCounter";

export const CounterApp = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button data-testid="decrement-button" onClick={decrement}>
        -
      </button>
      <button data-testid="increment-button" onClick={increment}>
        +
      </button>
      <p>clicked: {count}</p>
    </div>
  );
};
