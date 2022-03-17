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
      <p className="display__result">{result}</p>
    </div>
  );
};

export default Display;
