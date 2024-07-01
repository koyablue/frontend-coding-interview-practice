// https://bigfrontend.dev/react/useHover

// It is common to see conditional rendering based on hover state of some element.
// We can achive it by CSS pseduo class :hover, but for more complex cases it might be better to have state controlled by script.
// Now you are asked to create a useHover() hook.

// function App() {
//   const [ref, isHovered] = useHover()
//   return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
// }

import { Ref, useEffect, useRef, useState } from "react";

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const ref = useRef<T>(null);

  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    setIsHovering(false);

    const element = ref.current;
    if (!element) return;

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref.current]);

  return [ref, isHovering];
}
