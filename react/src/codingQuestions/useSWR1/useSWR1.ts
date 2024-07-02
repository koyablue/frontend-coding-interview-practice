// https://bigfrontend.dev/react/useSWR-1

import { useEffect, useState } from "react";

// SWR is a popular library of data fetching.
// Let's try to implement the basic usage by ourselves.

// import React from 'react'

// function App() {
//   const { data, error } = useSWR('/api', fetcher)
//   if (error) return <div>failed</div>
//   if (!data) return <div>loading</div>

//   return <div>succeeded</div>
// }

// this is not to replicate the true implementation of useSWR()
// The first argument key is for deduplication, we can safely ignore it for now

export const useSWR = <T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T;
  error?: E;
} => {
  console.log(`${_key} is not used for this time.`);

  const [data, setData] = useState<T>();
  const [error, setError] = useState<E>();

  let fetcherRes: T | Promise<T>;
  try {
    fetcherRes = fetcher();
  } catch (err) {
    setError(err as E);
    return { data, error };
  }

  useEffect(() => {
    const setFetcherRes = async () => {
      try {
        const res = await fetcherRes;
        setData(res);
      } catch (err) {
        setError(err as E);
      }
    };

    if (fetcherRes instanceof Promise) {
      setFetcherRes();
    }
  }, []);

  const result = fetcherRes instanceof Promise ? data : fetcherRes;

  return { data: result, error };
};
