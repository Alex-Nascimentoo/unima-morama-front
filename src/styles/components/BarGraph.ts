import styled from "styled-components";
import { theme } from "../Theme";

export const RulerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 6rem;
    padding-right: 1rem;
`;

export const RulerDivParagraph = styled.p`
    font-size: 80%;
    color: ${theme.color.black};
`;

export const MonthDiv = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 80%;
`;

export const MonthItemDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MonthItemDivBars = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    height: 6rem;
    gap: 0.5rem;
`;

export const MonthDivParagraph = styled.p`
    font-size: 80%;
    color: ${theme.color.black};
`;

export const BarGraphContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: start;
    font-weight:lighter;
    
    padding: 3rem;
    background-color: ${theme.color.absoluteWhite};;

    border-width: 2px;
    border-color: ${theme.color.white};
    border-style: solid;
    border-radius: 1rem;`;

export const BarDiv = styled.div<{ height: number }>`
    width: 0.5rem;
    height: ${(props: {height: number}) => props.height}%;
    border-radius: 1rem;
    background-image: ${theme.color.gradient};
`;

export const BarDivMedian = styled.div<{ height: number }>`
    width: 0.5rem;
    height: ${(props: {height: number}) => props.height}%;
    border-radius: 1rem;
    background-color: ${theme.color.gray};
    opacity: 0.5;
`

export const MonthKeyParagraph = styled.div`
    color: ${theme.color.black};
`;