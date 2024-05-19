import styled from "styled-components";
import { theme } from "../../../Theme";

export const BalanceLabelStyle = styled.p<{ $totaldailybalance: number }>`
    font-size: 0.75rem;
    color: ${props => props.$totaldailybalance >= 0 ? theme.color.green : theme.color.red};
    margin: 0;
`;