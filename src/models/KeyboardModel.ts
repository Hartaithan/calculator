import React from "react";

export interface IKeyboardProps {
  calculations: [string, React.Dispatch<React.SetStateAction<string>>];
  result: [string, React.Dispatch<React.SetStateAction<string>>];
}

export enum KeyTypes {
  DELETE = "delete",
  OPERATION = "operation",
  DIGIT = "digit",
  EQUALS = "equals",
}
