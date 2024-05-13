import styled from "styled-components";
import { theme } from "../Theme";

export const Button = styled.button`
  padding: .7rem 1.4rem;

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
