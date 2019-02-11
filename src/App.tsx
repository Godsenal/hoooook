import React, { useState, useCallback } from "react";
import PingPong from "./PingPong";
import Revent from "./Revent";

const revent = new Revent();

const commonStyle = {
  marginTop: "3rem",
  display: "flex",
  justifyContent: "center"
};
function App() {
  const [key, setKey] = useState(0);
  const [start, setStart] = useState(false);
  const handleStart = useCallback(() => {
    revent.emit("ping");
    setStart(true);
  }, []);
  const handleStop = useCallback(() => {
    setKey(prevKey => prevKey + 1);
    setStart(false);
  }, []);
  return (
    <div>
      <div style={commonStyle}>
        {!start ? (
          <button onClick={handleStart}>Start pingpong</button>
        ) : (
          <button onClick={handleStop}>Stop pingpong</button>
        )}
      </div>
      <div key={key} style={{ ...commonStyle, justifyContent: "space-around" }}>
        <PingPong revent={revent} name="ping" others={["pong"]} />
        <PingPong revent={revent} name="pong" others={["ping"]} />
      </div>
    </div>
  );
}

export default App;
