import styled from "styled-components";
import { theme } from "../Theme";

export const DailySummaryButton = styled.button` 
    width: 5rem;
    height: 5rem;
    font-size: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-width: 2px;
    border-color: ${theme.color.white};
    border-style: solid;
    border-radius: 1rem;

    background-color: ${theme.color.absoluteWhite};

    &:hover {
        transition: 0.08s;
        opacity: 0.5;
        cursor: pointer;
    }
`;

export const DayNumber = styled.h1`
    font-size: 1rem;
    color: ${theme.color.black};
    margin: 0;
`;

export const BalanceLabel = styled.p`
    font-size: 0.75rem;
    color: ${theme.color.gray};
    margin: 0;
`

export const DailyTotalBalance = styled.p<{ $totaldailybalance: number }>`
    font-size: 0.75rem;
    color: ${props => props.$totaldailybalance >= 0 ? theme.color.green : theme.color.red};
    margin: 0;
`;