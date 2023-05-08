import styled from '@emotion/styled';

export const ListItem = styled.li`
  padding: 4px 8px;

  display: flex;
  justify-content: space-between;

  font-weight: 700;
  box-shadow: 0px 0px 3px 0px #000000bf;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const Btn = styled.button`
  font-weight: inherit;

  background-color: inherit;
  border-radius: 4px;
  border: 1px solid #bdbdbd61;
  box-shadow: 0px 0px 3px 0px #000000bf;

  cursor: pointer;

  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #959292;
    color: white;
  }
`;
