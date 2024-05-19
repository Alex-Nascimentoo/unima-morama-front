import styled from "styled-components";
import { theme } from "../Theme";

export const RightDashboardPannel = styled.section`
  height: fit-content;  
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  flex-grow: 1;

  background-color: ${theme.color.absoluteWhite};
  box-shadow: 0px 2px 10px 0px rgba(130,130,130,0.49);
`;

export const InfoCardSection = styled.section`
display: flex;
justify-content: space-between;
gap: 1rem;
`;

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;

`;