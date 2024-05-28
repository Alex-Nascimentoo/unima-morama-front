import styled from "styled-components";
import { theme } from "../Theme";

export const ComponentContainer = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 3rem;
    border-radius: 1rem;

    border-width: 2px;
    border-color: ${theme.color.white};
    border-style: solid;
    border-radius: 1rem;
`;


export const PieGraph = styled.div<{ $firstatb: number, $secondatb: number, $thirdatb: number }>`    
    position: relative;

    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    background-image: conic-gradient(
    ${theme.color.primary} ${props => props.$firstatb * 3.6}deg,
    ${theme.color.accent} 0 ${props => (props.$secondatb + props.$firstatb) * 3.6}deg,
    ${theme.color.gray} 0 ${props => (props.$thirdatb + props.$secondatb + props.$firstatb) * 3.6}deg
    );  
`;

export const ScoopDiv = styled.div`
    width: 8rem;
    height: 8rem;

    border-radius: 50%;
    background-color: ${theme.color.absoluteWhite};

    position: absolute;
`;

export const DonutGraphWrapper = styled.div`
    width: fit-content;
    height: fit-content; 

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DonutLabel = styled.p`
    font-size: 1rem;
    color: ${theme.color.black};
`;

export const DonutColorIndicator = styled.div< {color: string} >`
    width: 2rem;
    height: auto;

    border-radius: 1rem;

    background-color: ${props => props.color}
`; 

export const DonutLabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 8rem;
`;

export const DonutLabelsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

