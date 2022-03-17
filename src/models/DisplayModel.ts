import React from "react";

export interface IDisplayModel {
  calculations: [string, React.Dispatch<React.SetStateAction<string>>];
  result: [string, React.Dispatch<React.SetStateAction<string>>];
}
