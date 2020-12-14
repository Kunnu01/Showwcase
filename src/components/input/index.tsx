import { HTMLProps } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../theme';

const style = (
  { theme, fullWidth = true }: { theme: Theme, fullWidth: boolean }
) => css`
  display: block;
  width: ${fullWidth ? '100%' :'20%'};
  height: auto;
  position: relative;
  font-weight: 500;
  text-align: ${fullWidth ? 'left' :'center'};
  font-size: 15px;
  margin: 10px 0 20px 0;
  padding: 8px;
  border-radius: 5px;
  border-width: 0.2px;
  appearance: none;
  border-color: ${theme.color.grey};
  &:focus {
    border-color: ${theme.color.primary};
  };
`

const Input = styled.input<HTMLProps<HTMLInputElement> & { fullWidth?: boolean }>`
  ${style}
`

const TextArea = styled.textarea<HTMLProps<HTMLTextAreaElement> & { fullWidth?: boolean }>`
  ${style}
`

export { Input, TextArea }
