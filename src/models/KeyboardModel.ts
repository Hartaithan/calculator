import React from "react";

export interface IKeyboardProps {
  calculations: [string, React.Dispatch<React.SetStateAction<string>>];
  result: [string, React.Dispatch<React.SetStateAction<string>>];
}

export enum KeyTypes {
  CLEAR = "delete",
  OPERATION = "operation",
  DIGIT = "digit",
  EQUALS = "equals",
  SQUARE = "square",
  PERCENT = "percent",
}
