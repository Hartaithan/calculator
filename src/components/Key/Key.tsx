import React from "react";
import { IKeyProps } from "../../models/KeyModel";
import "./key.scss";

const Key: React.FC<IKeyProps> = (props) => {
  const { action, content } = props;
  return (
    <button className={`key ${action}`} {...props}>
      {content}
    </button>
  );
};

export default Key;
