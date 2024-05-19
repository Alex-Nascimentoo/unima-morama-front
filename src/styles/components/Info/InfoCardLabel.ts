import styled from "styled-components";
import { theme } from "../../Theme";

export const InfoCardLabelStyle = styled.section<infoCardLabelProps>`
    color: ${props => props.$value > 0 ? theme.color.green : theme.color.red};
    font-size: 2rem;
`;

