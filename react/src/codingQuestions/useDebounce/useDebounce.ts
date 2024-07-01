import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
  // return debouncedValue
  // set value to debounceValue after delay
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debounceVal;
};
