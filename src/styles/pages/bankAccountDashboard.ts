import styled from "styled-components";
import { theme } from "../Theme";

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: end;
  
  background-color: ${theme.color.accent};
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);

  margin-top: 1rem;
  padding: 1rem;

  color: ${theme.color.white};

  #account-name {
    grid-column: span 2;

    justify-self: left;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  padding-top: 1rem;
`;


export const ContactCard = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: end;
  align-items: center;

  padding: 1rem;

  background-color: ${theme.color.absoluteWhite};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
  border-radius: 10px;

  font-size: 1.3rem;

  .account-name {
    grid-column: span 2;

    justify-self: left;
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