import React from "react";
import "./display.scss";

const Display: React.FC = () => {
  return (
    <div className="display">
      <p className="display__calculations">20×80×0,5</p>
      <p className="display__result">800</p>
    </div>
  );
};

export default Display;
