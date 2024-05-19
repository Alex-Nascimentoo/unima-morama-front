import styled from "styled-components";
import { theme } from "../../Theme";

export const CalendarContainerSectionStyle = styled.section`
    height: fit-content;

    margin: 1rem;
    padding: 1rem;    
    border-radius: 1rem;

    flex-grow: 1;

    background-color: ${theme.color.absoluteWhite};
    box-shadow: 0px 2px 10px 0px rgba(130,130,130,0.49);
`;