import React from "react";
import { IKeyProps } from "../../models/KeyModel";
import "./key.scss";

const Key: React.FC<IKeyProps> = (props) => {
  const { type, content } = props;
  return <button className={`key ${type}`}>{content}</button>;
};

export default Key;
