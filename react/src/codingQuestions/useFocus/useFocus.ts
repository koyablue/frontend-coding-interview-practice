// https://bigfrontend.dev/react/useFocus

// CSS pseudo-class :focus-within could be used to allow conditional rendering in parent element on the focus state of descendant elements.
// While it is cool, in complex web apps, it might be better to control the state in script.

// Now please create useFocus() to support this.

// function App() {
//   const [ref, isFocused] = useFocus()
//   return <div>
//     <input ref={ref}/>
//     {isFocused && <p>focused</p>}
//   </div>
// }

import { Ref, useEffect, useRef, useState } from "react";

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    setIsFocused(document.activeElement === ref.current);

    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);

    current.addEventListener("focus", onFocus);
    current.addEventListener("blur", onBlur);

    return () => {
      current.removeEventListener("focus", onFocus);
      current.removeEventListener("blur", onBlur);
    };
  }, [ref.current]);

  return [ref, isFocused];
}
