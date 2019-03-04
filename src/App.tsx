import React, { useState, useCallback } from "react";
import { ButtonClass, ButtonFunc } from "./Button";

function App() {
  const [user, setUser] = useState("LTH");
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ margin: 20 }}>
        <span>현재 유저: </span>
        <select value={user} onChange={e => setUser(e.target.value)}>
          <option value="LTH">LTH</option>
          <option value="KBJ">KBJ</option>
        </select>
      </div>
      <ButtonClass user={user} />
      <ButtonFunc user={user} />
    </div>
  );
}

export default App;
