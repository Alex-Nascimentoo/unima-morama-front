import styled from "styled-components";
import { theme } from "../../../Theme";

export const WeekDayElementStyle = styled.p`
    width: 5rem;
    flex-grow: 1;

    font-family: ${theme.font.inter};
    font-size: 12;

    color: ${theme.color.gray};

    display: flex;
    justify-content: center;
`;