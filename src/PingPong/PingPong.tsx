import React, { useState, useCallback, useRef, useEffect } from "react";
import Revent from "./Revent";
import useOn from "./useOn";

interface PingPongProps {
  revent: Revent;
  name: string;
  others: string[];
}

const useClearTimerOnUnmount = (timer: React.RefObject<number>) => {
  useEffect(() => {
    return () => {
      timer.current && window.clearTimeout(timer.current);
    };
  }, []);
};
const PingPong: React.SFC<PingPongProps> = ({ revent, name, others }) => {
  const [ping, setPing] = useState(0);
  const timer = useRef(0);
  const onName = useCallback(() => {
    setPing(prevPing => prevPing + 1);
    timer.current = window.setTimeout(() => {
      others.forEach(other => revent.emit(other));
    }, 1000);
  }, []);
  useClearTimerOnUnmount(timer);
  useOn(revent, name, onName);
  return (
    <div>
      <span>{ping} !!</span>
    </div>
  );
};

export default PingPong;
