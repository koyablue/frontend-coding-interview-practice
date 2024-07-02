// https://bigfrontend.dev/react/useclickoutside

import { useEffect, useRef } from "react";

// Click above header menu on this page, you can see that the dropdown menu is dismissed after clicking outside.

// Now you are asked to implement a React hook to make it eaiser to implement such behavior.

// function Component() {
//   const ref = useClickOutside(() => {
//     alert('clicked outside')
//   });
//   return <div ref={ref}>..</div>
// }

export const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      const node = e.target as Node;
      if (ref.current && !ref.current.contains(node)) {
        callback();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [callback]);

  return ref;
};
