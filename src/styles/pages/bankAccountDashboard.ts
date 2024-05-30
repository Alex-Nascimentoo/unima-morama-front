import styled from "styled-components";
import { theme } from "../Theme";

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  
  background-color: ${theme.color.accent};
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);

  margin-top: 1rem;
  padding: 1rem;

  color: ${theme.color.white};

  #company-name {
    grid-column: span 3;

    justify-self: left;
  }
`;