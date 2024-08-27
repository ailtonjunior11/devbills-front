/* eslint-disable prettier/prettier */
import { InputNumberFormat } from '@react-input/number-format';
import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > label {
    font-size: 0.625rem;
    color: ${theme.colors.white};
  }

  select {
    height: 2.25rem;
    border-radius: 0.25rem;
    padding: 0 0.75rem;
    background-color: ${theme.colors.black};
    color: ${theme.colors.neutral};
    border: solid 1px transparent;
    transform: all 100ms;
    cursor: pointer;

    &:focus {
      border-color: ${theme.colors.primary};
    }
  }
`;

export const CurrencyInput = styled(InputNumberFormat)`
  height: 2.25rem;
  width: 100%;
  background-color: ${theme.colors.black};
  border: 0;
  border-radius: 0.25rem;
  padding: 0 0.75rem;
  color: ${theme.colors.neutral};
  font-size: 1rem;
  border: solid 1px transparent;
  transform: all 100ms;

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.neutral};
  }
`;

export const RadioForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 1rem;
    height: 1rem;
    accent-color: ${theme.colors.primary};
  }

  label {
    color: ${theme.colors.white};
    font-size: 0.875rem;
  }
`;
