// https://bigfrontend.dev/react/implement-useismounted

// When we handle async requests in React, we need to pay attention if the component is already unmounted.
// Please implement useIsMounted() for us to easily tell if the component is still not unmounted.

import { useRef, useEffect } from "react";

export const useIsMounted = (): (() => boolean) => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return () => isMountedRef.current;
};
