import styled from "styled-components";
import { theme } from "../../../Theme";

export const CalendarDayButtonStyle = styled.button` 
    width: 5rem;
    height: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;

    border-width: 2px;
    border-color: ${theme.color.white};
    border-style: solid;
    border-radius: 1rem;

    background-color: ${theme.color.absoluteWhite};

    @media only screen and (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    }

    &:hover {
        transition: 0.08s;
        opacity: 0.5;
        cursor: pointer;
    }
`;