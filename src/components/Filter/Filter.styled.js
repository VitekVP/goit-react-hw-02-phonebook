import styled from '@emotion/styled';

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
