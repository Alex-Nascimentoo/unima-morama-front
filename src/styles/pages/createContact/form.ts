import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.5rem;
  row-gap: 1rem;

  max-width: 510px;
  margin: 5rem auto 0;

  .full-column {
    grid-column: span 2;
  }
`;