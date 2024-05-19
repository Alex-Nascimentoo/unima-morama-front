import styled from "styled-components";
import { theme } from "../../../Theme";

export const SelectLabelStyle = styled.p`
    width: fit-content;

    font-family: ${theme.font.inter};
    font-size: 16;

    color: ${theme.color.gray};

    display: flex;
    justify-content: center;
`;