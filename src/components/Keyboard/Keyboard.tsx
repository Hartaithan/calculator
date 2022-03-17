import React from "react";
import { IKeyboardProps } from "../../models/KeyboardModel";
import { IKey } from "../../models/KeyModel";
import Key from "../Key/Key";
import "./keyboard.scss";

const keys: IKey[] = [
  { id: 1, type: "delete", content: "C" },
  { id: 2, type: "operation", content: "√" },
  { id: 3, type: "operation", content: "%" },
  { id: 4, type: "operation", content: "/" },
  { id: 5, type: "digit", content: "7" },
  { id: 6, type: "digit", content: "8" },
  { id: 7, type: "digit", content: "9" },
  { id: 8, type: "operation", content: "×" },
  { id: 9, type: "digit", content: "4" },
  { id: 10, type: "digit", content: "5" },
  { id: 11, type: "digit", content: "6" },
  { id: 12, type: "operation", content: "-" },
  { id: 13, type: "digit", content: "1" },
  { id: 14, type: "digit", content: "2" },
  { id: 15, type: "digit", content: "3" },
  { id: 16, type: "operation", content: "+" },
  { id: 17, type: "digit", content: "00" },
  { id: 18, type: "digit", content: "0" },
  { id: 19, type: "comma", content: "," },
  { id: 20, type: "equals", content: "=" },
];

const Keyboard: React.FC<IKeyboardProps> = (props) => {
  const [calculations, setCalculations] = props.calculations;

  const updateCalculations = (value: string) => {
    setCalculations(calculations + value);
  };

  return (
    <div className="keyboard">
      {keys.map((item: IKey) => (
        <Key
          key={item.content}
          action={item.type}
          content={item.content}
          onClick={() => updateCalculations(item.content)}
        />
      ))}
    </div>
  );
};

export default Keyboard;
