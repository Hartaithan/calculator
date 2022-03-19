import React from "react";
import { IDisplayModel } from "../../models/DisplayModel";
import "./display.scss";

const Display: React.FC<IDisplayModel> = (props) => {
  const [calculations] = props.calculations;
  const [result] = props.result;
  return (
    <div className="display">
      <p className="display__calculations">
        {calculations ? calculations : "0"}
      </p>
      <div className="display__result">
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Display;
