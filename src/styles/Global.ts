import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  margin: 0;
  padding: 0;

  font-family: ${({ theme }) => theme.font.inter}, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black};
  
  background-color: ${({ theme }) => theme.color.white};
}

main {
  display: inline-block;
  /* width: 88%; */
  width: calc(100% - 11rem);
  margin-left: 6rem;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  padding: 0;
  margin: 0;
}

img,
picture {
  max-width: 100%;
  display: block;
}
`;

export const Icon = styled.img<{
  $src: string;
  $color?: string;
  $size?: string;
  }>`
  width: ${props => props.$size || '2.4rem'};
  aspect-ratio: 1 / 1;

  background-color: ${props => props.$color || theme.color.black};
  -webkit-mask: url('/icon-strawberry.svg') no-repeat center;
  mask: url(${props => props.$src}) no-repeat center;
  mask-size: cover;
`;

export const Container = styled.div`
padding-top: 4rem;
  
display: inline-block;

  width: 100%;

  padding-left: 3.5rem;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;

  h1 {
    color: ${theme.color.primary};
  }
`;
