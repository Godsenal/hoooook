import { useCallback, useEffect } from "react";
import Revent from "./Revent";

const useOn = (
  revent: Revent,
  name: string,
  callback: (...args: any[]) => void
) => {
  const memoizedCb = useCallback(callback, []);

  useEffect(() => {
    revent.on(name, memoizedCb);
    return () => {
      revent.remove(name, memoizedCb);
    };
  }, [name, memoizedCb]);
};

export default useOn;
