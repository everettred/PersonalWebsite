import React from "react";
import { useState } from "react";

const Randomize: React.FC = () => {
  const [inputArray, setInputArray] = useState<string[]>([]);
  const [randomInput, setRandomInput] = useState("");
  const [randomSelected, setRandomSelected] = useState("");

  let randomListDisplay = inputArray.map((e, i) => {
    return <section>{inputArray[i]}</section>;
  });

  let arrayAdd = () => {
    if (randomInput) {
      console.log("hit true");
      setInputArray([...inputArray, randomInput]);
    }
  };

  let selector = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumberInArray = Math.random() * (max - min) + min;
    let selected = inputArray[Math.round(randomNumberInArray)];
    setRandomSelected(selected);
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
