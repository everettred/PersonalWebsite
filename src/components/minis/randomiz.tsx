import React from "react";
import { useState } from "react";

const Randomize: React.FC = () => {
  const [inputArray] = useState<string[]>([]);
  const [randomInput, setRandomInput] = useState("");
  const [randomSelected, setRandomSelected] = useState([]);
  let randomListDisplay = inputArray.map((e, i) => {
    return <section>{inputArray[i]}</section>;
  });
  let arrayAdd = () => {
    if (randomInput) {
      console.log("hit true");
      return inputArray.push(randomInput);
    }
  };

  let selector = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  return (
    <div>
      <section>
        <input
          onChange={(e) => setRandomInput(e.target.value)}
          placeholder="randomize here"
        ></input>
        <section>
          <button>Clear</button>
          <button onClick={() => arrayAdd()}>Enter</button>
        </section>
      </section>
      <button onClick={() => selector(0, inputArray.length - 1)}>
        Randomize!
      </button>
      <h1>{randomSelected}</h1>
      <section>{randomListDisplay}</section>
    </div>
  );
};
export default Randomize;
