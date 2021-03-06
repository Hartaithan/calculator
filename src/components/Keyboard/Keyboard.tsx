import React from "react";
import { IKeyboardProps, KeyTypes } from "../../models/KeyboardModel";
import { IKey } from "../../models/KeyModel";
import Key from "../Key/Key";
import "./keyboard.scss";

const keys: IKey[] = [
  { id: 1, type: KeyTypes.CLEAR, content: "C" },
  { id: 2, type: KeyTypes.SQUARE, content: "√" },
  { id: 3, type: KeyTypes.PERCENT, content: "%" },
  { id: 4, type: KeyTypes.OPERATION, content: "/" },
  { id: 5, type: KeyTypes.DIGIT, content: "7" },
  { id: 6, type: KeyTypes.DIGIT, content: "8" },
  { id: 7, type: KeyTypes.DIGIT, content: "9" },
  { id: 8, type: KeyTypes.OPERATION, content: "×" },
  { id: 9, type: KeyTypes.DIGIT, content: "4" },
  { id: 10, type: KeyTypes.DIGIT, content: "5" },
  { id: 11, type: KeyTypes.DIGIT, content: "6" },
  { id: 12, type: KeyTypes.OPERATION, content: "-" },
  { id: 13, type: KeyTypes.DIGIT, content: "1" },
  { id: 14, type: KeyTypes.DIGIT, content: "2" },
  { id: 15, type: KeyTypes.DIGIT, content: "3" },
  { id: 16, type: KeyTypes.OPERATION, content: "+" },
  { id: 17, type: KeyTypes.DIGIT, content: "00" },
  { id: 18, type: KeyTypes.DIGIT, content: "0" },
  { id: 19, type: KeyTypes.OPERATION, content: "," },
  { id: 20, type: KeyTypes.EQUALS, content: "=" },
];

const Keyboard: React.FC<IKeyboardProps> = (props) => {
  const [calculations, setCalculations] = props.calculations;
  const [result, setResult] = props.result;

  const updateCalculations = (item: IKey) => {
    const calc = calculations
      .split("")
      .join("")
      .replaceAll("×", "*")
      .replaceAll(",", ".");
    const typeOperation = item.type === KeyTypes.OPERATION;
    const calcIsEmpty = calc === "";
    const findedKey = keys.find((item) => item.content === calc.slice(-1));
    const lastNotOperation = findedKey?.type === KeyTypes.OPERATION;
    if (item.type === KeyTypes.CLEAR) {
      setCalculations("");
      setResult("");
      return;
    }
    if ((typeOperation && calcIsEmpty) || (typeOperation && lastNotOperation)) {
      return;
    }
    if (item.type === KeyTypes.EQUALS) {
      let result = eval(calc).toString();
      if (result === "Infinity") {
        result = "Ошибка";
      }
      setResult(result);
      return;
    }
    if (item.type === KeyTypes.SQUARE) {
      const result = Math.sqrt(eval(calc)).toString();
      setResult(result);
      setCalculations(result);
      return;
    }
    if (item.type === KeyTypes.PERCENT) {
      const result = (eval(calc) / 100).toString();
      setResult(result);
      setCalculations(result);
      return;
    }
    setCalculations(calculations + item.content);
  };

  return (
    <div className="keyboard">
      {keys.map((item: IKey) => (
        <Key
          key={item.content}
          action={item.type}
          content={item.content}
          onClick={() => updateCalculations(item)}
        />
      ))}
    </div>
  );
};

export default Keyboard;
