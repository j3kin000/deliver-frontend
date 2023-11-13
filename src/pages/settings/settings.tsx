import React, { useState } from "react";

const Settings = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Settings;
