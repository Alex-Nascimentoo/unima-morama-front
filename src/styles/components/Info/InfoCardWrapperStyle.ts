import styled from "styled-components";
import { theme } from "../../Theme";

export const InfoCardWrapperStyle = styled.section`
    width: 100%;
    height: 100px;
    border-radius: 1rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${theme.color.gray};
    background-color: ${theme.color.absoluteWhite};
   
    border-width: 2px;
    border-color: ${theme.color.white};
    border-style: solid;
    border-radius: 1rem;
`;