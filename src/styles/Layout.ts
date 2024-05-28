import styled from 'styled-components';
import { theme } from './Theme';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin: 0 auto;
  padding: 0 0 0 3.5rem;

`;

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  
  background-color: ${theme.color.absoluteWhite};
  box-shadow: 0 1px 5px rgba(0, 0, 0, .3);

  height: 100%;
  min-height: 100vh;
  width: 6rem;
  padding-top: 1.3rem;

  #logo {
    margin-bottom: 2.5rem;
  }

  img {
    transition: .1s;
  }

  img:hover {
    background-color: ${theme.color.primary};
  }

  @media only screen and (max-width: 768px) {

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    row-gap: 0;
    bottom: 0;
    top: auto;
    
    background-color: ${theme.color.absoluteWhite};
    box-shadow: 0 1px 5px rgba(0, 0, 0, .3);

    height: 6rem;
    min-height: fit-content;
    width: 100vw;

    #logo {
    margin-bottom: 0;
  }
  }

`;

export const Header = styled.header`
  position: fixed;

  width: calc(100% - 5rem);
  padding: 1rem 1rem 1rem 6rem;
  margin-bottom: 2rem;

  background-color: ${theme.color.primary};
  border-bottom-right-radius: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);

  color: ${theme.color.white};

  img:hover {
    transition: .1s;
    background-color: ${theme.color.accent};
  }

  @media only screen and (max-width: 768px) {
    width: 100vw;
    border-radius: 0;
  }
`;
