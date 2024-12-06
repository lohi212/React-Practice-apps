import React, { useEffect, useState } from "react";
import "./styles.css";

const TicTacToe = () => {
  const [arr, setArr] = useState(new Array(9).fill(null));
  const [turn, setTurn] = useState(0);

  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleChange = (i) => {
    let newTurn = turn === "x" ? "0" : "x";
    const newArr = [...arr];
    newArr[i] = newTurn;

    setArr(newArr);
    setTurn(newTurn);
  };

  const areAllElementsEqual = (a) => {
    return a.every((el) => el === a[0]);
  };

  const checkSuccess = () => {
    // Use winningCombinations, traverse array and check
  };

  useEffect(() => {
    checkSuccess();
  }, [arr]);

  return (
    <div className="center h-full">
      <div className="tic-tac-toe">
        {arr.map((ele, i) => (
          <div className="item center" onClick={() => handleChange(i)} key={i}>
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
