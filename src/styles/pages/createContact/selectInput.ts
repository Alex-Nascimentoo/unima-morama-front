import styled from 'styled-components';
import { theme } from '../../Theme';

export const SelectInput = styled.select`
  background-color: ${theme.color.absoluteWhite};
  border: none;
  border-radius: 7px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);

  padding: .5rem 1rem;

  font-size: 1rem;
`;