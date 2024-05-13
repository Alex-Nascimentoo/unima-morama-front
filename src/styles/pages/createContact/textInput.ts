import styled from 'styled-components';

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