// https://bigfrontend.dev/react/usetimeout

// Create a hook to easily use setTimeout(callback, delay).

// 1. reset the timer if delay changes
// 2. DO NOT reset the timer if only callback changes

import { useEffect, useRef } from "react";

export const useTimeout = (callback: () => void, delay: number) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const timeoutId = setTimeout(() => callbackRef.current(), delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay]);
};
