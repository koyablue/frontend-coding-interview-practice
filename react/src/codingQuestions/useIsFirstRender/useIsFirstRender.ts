// https://bigfrontend.dev/react/useIsFirstRender
// Create a hook to tell if it is the first render.
// const isFirstRender = useIsFirstRender()
// only true for the first render

import { useRef } from "react";

export const useIsFirstRender = () => {
  const isFirstRenderRef = useRef(true);

  if (isFirstRenderRef.current) {
    isFirstRenderRef.current = false;
    return true;
  }

  return false;
};
