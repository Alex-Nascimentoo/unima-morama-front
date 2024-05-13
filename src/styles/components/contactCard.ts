import styled from "styled-components";
import { theme } from "../Theme";

export const ContactCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;

  padding: 1rem;

  background-color: ${theme.color.absoluteWhite};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
  border-radius: 10px;

  font-size: 1.3rem;

  p:first-child {
    justify-self: left;
    grid-column: span 3;
  }

  img:hover {
    transition: .1s;
    background-color: ${theme.color.primary};
  }

  div {
    display: flex;
    gap: 1rem;

    &>img:hover {
      cursor: pointer;
    }
  }
`;