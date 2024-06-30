// https://bigfrontend.dev/react/The-React-Counter

// As the first React problem, you are asked to create the famous Counter app.

// 1. counter starts from 0.
// 2. click the '+' button to increment.
// 3. click the '-' button to decrement.
// data-testid is used to test your code, please do not remove them.

export const CounterApp = () => {
  return (
    <div>
      <button data-testid="decrement-button">-</button>
      <button data-testid="increment-button">+</button>
      <p>clicked: 0</p>
    </div>
  );
};
