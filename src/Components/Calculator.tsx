import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <div
      style={{
        width: "600px",
        margin: "auto",
        marginTop: "50px",
        
      }}
    >
      <input
        className={"form-control"}
        type="text"
        value={input}
        placeholder="Enter expression"
        readOnly
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        className={"form-control"}
        type="text"
        value={result}
        placeholder="Result"
        readOnly
        style={{ width: "100%", marginBottom: "20px" }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 5fr)",
          gap: "25px",
        }}
      >
        {buttons.map((button) => (
          <button
            key={button}
            type="button"
            className="btn btn-outline-danger"
            onClick={() => handleButtonClick(button)}
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "3px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
