import styled from "styled-components";
import { Icon } from "../../../Global";
import { SelectIconProps } from "../../../../types/Calendar/Select/SelectIconProps";

export const SelectIconStyle = styled(Icon)<SelectIconProps>`
    transform: rotate(${props => props.$direction === "left" ? "270deg" : "90deg"});
`;