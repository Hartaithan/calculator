import React from "react";
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";

const App: React.FC = () => {
  const calculations = React.useState("");
  const result = React.useState("");
  return (
    <div className="wrapper">
      <div className="body">
        <Display calculations={calculations} result={result} />
        <Keyboard calculations={calculations} result={result} />
      </div>
    </div>
  );
};

export default App;
