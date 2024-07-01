// https://bigfrontend.dev/react/useEffectOnce
// Here is a simple problem, implement useEffectOnce() as the name says itself, it runs an effect only once.

import { EffectCallback, useEffect } from "react";

export const useEffectOnce = (effect: EffectCallback) => {
  useEffect(() => {
    return effect();
  }, []);
};
