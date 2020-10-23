import styled from "styled-components";

export const PaginationContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const ButtonNext = styled.button`
  border-radius: 3px;
  border: solid 1px #c2cbd2;
  background-color: #ffffff;
  padding: 15px 5px;
`;

export const InputContainer = styled.input`
  width: 7px;
  height: 26px;
  border-radius: 3px;
  margin: 0 10px;
  padding: 0 10px;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  background-color: #ffffff;
`;
