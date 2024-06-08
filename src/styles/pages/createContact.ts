import styled from 'styled-components';
import { theme } from '../Theme';

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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: .2rem;

  font-weight: 500;
  font-size: 1.2rem;
`;

export const SelectInput = styled.select`
  background-color: ${theme.color.absoluteWhite};
  border: none;
  border-radius: 7px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);

  padding: .5rem 1rem;

  font-size: 1rem;
`;

export const TextInput = styled.input`
  border: none;
  border-radius: 7px;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);

  padding: .5rem 1rem;

  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled.p`
  color: ${theme.color.red};
  font-size: 1rem;
`;