import styled from "styled-components";
import { theme } from "../../../Theme";

export const SelectButtonStyle = styled.button`
    width: fit-content;
    height: fit-content;
    
    border-style: none;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${theme.color.absoluteWhite};
    color: ${theme.color.primary};

    &:hover {
        transition: 0.08s;
        opacity: 0.5;
        cursor: pointer;
    }
`;          