import styled from "styled-components";

export const StyledHeader = styled.header`
  background: linear-gradient(90deg, #4a90e2, #50e3c2);
  padding: 15px 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 20px auto;
  padding: 20px;
  width: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: 2px solid #4a90e2;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #50e3c2;
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #357abd;
  }
`;
