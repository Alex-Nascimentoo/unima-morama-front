import styled from 'styled-components';
import { theme } from '../Theme';

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  
  background-color: ${theme.color.accent};
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);

  margin-top: 1rem;
  padding: 1rem;

  color: ${theme.color.white};

  #header-client-name {
    grid-column: span 2;

    justify-self: left;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  padding-top: 1rem;

  #client-name {
    
  }
`;

export const ContactCard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;

  padding: 1rem;

  background-color: ${theme.color.absoluteWhite};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
  border-radius: 10px;

  font-size: 1.3rem;

  p:first-child {
    justify-self: left;
    grid-column: span 2;
  }

  img:hover {
    transition: .1s;
    background-color: ${theme.color.primary};
  }

  div {
    display: flex;
    gap: 1rem;

    &>img:hover {
      cursor: pointer;
    }
  }
`;

export const StatusCard = styled.div<{ $status: "paid" | "active" | "late" }>`
  display: flex;
  justify-content: center;
  justify-items: center;
  
  border-radius: 2rem;
  padding: 0.6rem;

  background-color: ${props => {
    switch (props.$status) {
      case "paid":
        return theme.color.green;
      case "active":
        return theme.color.blue; 
      case "late":
        return theme.color.red; 
    }
  }};
  color: white;
`;

export const Filter = styled.div<{ $state: string }>`
  border: none;
  background: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;

  font-size: 1.3rem;
  font-weight: 500;
  color: ${props => (props.$state === "debt" ? theme.color.red : theme.color.green)};

  &:hover {
    cursor: pointer; 
  }
`

export const FilterButton = styled.div`
  border: none;
  background: none;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.5;
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
