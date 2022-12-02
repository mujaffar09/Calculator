import { useEffect, useState } from "react";

export default function Calculator() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const mystyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: "20%",
    width: "360px",
    height: "60px",
    fontFamily: "Arial"
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "110px 110px 110px 50px",
    gridTemplateRows: "40px 40px 40px 40px 40px",
    marginLeft: "20%",
    backgroundColor: "lightGray",
    width: "377px",
    border: "2px solid black"
  };
  function compute() {
    switch (operator) {
      case "+":
        setResult(operand1 + operand2);
        break;
      case "-":
        setResult(operand1 - operand2);
        break;
      case "*":
        setResult(operand1 * operand2);
        break;
      case "/":
        setResult(operand1 / operand2);
        break;

      default:
        return;
    }
  }
  function clear() {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setResult("");
  }
  function update(event) {
    if (!operator) setOperand1(operand1 + event.target.value);
    if (operator && operand1) setOperand2(operand2 + event.target.value);
  }
  function updateOperator(event) {
    setOperator(event.target.value);
  }
  useEffect(() => {
    compute();
    // setResult(+operand1 + +operand2);
  }, [operand2]);

  return (
    <>
      <div style={mystyle}>
        <div>{result}</div>
        <div>
          {operand1}
          {operator}
          {operand2}
        </div>
      </div>
      <div class="grid" style={gridStyle}>
        <button
          onClick={clear}
          style={({ backgroundColor: "red" }, { gridColumn: "4" })}
        >
          clear
        </button>

        <button onClick={(e) => update(e)} value="1">
          1
        </button>
        <button value="2" onClick={update}>
          2
        </button>
        <button onClick={update} value="3">
          3
        </button>
        <button onClick={updateOperator} value="+">
          +
        </button>
        <button onClick={update} value="4">
          4
        </button>
        <button onClick={update} value="5">
          5
        </button>
        <button onClick={update} value="6">
          6
        </button>
        <button onClick={updateOperator} value="-">
          -
        </button>
        <button onClick={update} value="7">
          7
        </button>
        <button onClick={update} value="8">
          8
        </button>
        <button onClick={update} value="9">
          9
        </button>
        <button onClick={updateOperator} value="*">
          *
        </button>
        <button onClick={update} value="7">
          0
        </button>
        <button onClick={update} value="8">
          .
        </button>
        <button onClick={update} value="9">
          =
        </button>
        <button onClick={updateOperator} value="*">
          /
        </button>
      </div>
    </>
  );
}
