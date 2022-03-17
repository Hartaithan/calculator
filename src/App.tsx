import React from "react";
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="body">
        <Display />
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
