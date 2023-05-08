import styled from '@emotion/styled';

export const FormPhonebook = styled.form`
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  border: 1px solid black;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 260px;
  height: 30px;

  border: 2px solid black;
  border-radius: 4px;

  &:focus {
    border: 2px solid green;
    outline: none;
    box-shadow: 0px 0px 10px 1px rgba(44, 221, 118, 0.65);
  }
`;

export const Btn = styled.button`
  width: 120px;
  height: 30px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;

  box-shadow: 0px 0px 6px 0px #000000bf;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #959292;
    color: white;
  }
`;
