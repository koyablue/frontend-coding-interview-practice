// https://bigfrontend.dev/react/useToggle
// It is quite common to see switches and checkboxes in web apps.

// Implement useToggle() to make things easier

// function App() {
//   const [on, toggle] = useToggle()
//   ...
// }

import { useState } from "react";

export const useToggle = (on: boolean): [boolean, () => void] => {
  const [isOn, setIsOn] = useState<boolean>(on);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return [isOn, toggle];
};
