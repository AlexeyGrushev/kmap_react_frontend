import React, { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "../styles";

export const UserInput = ({ onSolve }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let binaryVector = "";

    if (input.length === 4) {
      binaryVector = parseInt(input, 16).toString(2).padStart(16, "0");
    } else if (input.length === 16 && /^[01]+$/.test(input)) {
      binaryVector = input;
    } else {
      alert("Введите 4 символа (HEX) или 16 символов (BIN)");
      return;
    }

    onSolve(binaryVector);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h5>Введите вектор:</h5>
      <StyledInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
        placeholder="Вектор функции..."
      />
      <StyledButton type="submit">Построить</StyledButton>
    </StyledForm>
  );
};