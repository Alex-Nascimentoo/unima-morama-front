import styled from "styled-components";
import { theme } from "../Theme";

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;

  max-width: 510px;
  margin: 5rem auto 0;

  .third-column {
    grid-column: span 3;
  }
  .full-column {
    grid-column: span 4;
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: .7rem 1.4rem;
  width: 50%;

  background-color: ${theme.color.primary};
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);

  color: ${theme.color.white};
  font-size: 1.3rem;
  font-weight: 500;

  transition: .2s;

  &:hover {
    cursor: pointer;

    background-color: ${theme.color.white};

    color: ${theme.color.primary};
  }
`;