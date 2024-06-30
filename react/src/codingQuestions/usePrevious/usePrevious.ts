// https://bigfrontend.dev/react/usePrevious

import { useEffect, useRef } from "react";

// Create a hook usePrevious() to return the previous value, with initial value of `undefined.
export const usePrevious = <T>(value: T): T | undefined => {
  const valRef = useRef<T | undefined>();

  useEffect(() => {
    valRef.current = value;
  }, [value]);

  return valRef.current;
};
