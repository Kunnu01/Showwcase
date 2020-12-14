import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ theme, disabled }) => css`
    font-family: ${theme.fontFamily};
    display: inline-flex;
    background-color: ${!disabled ? theme.color.primary : theme.color.grey};
    font-size: 16px;
    border-radius: 5px;
    border-color: ${!disabled ? theme.color.primary : theme.color.grey};
    cursor: ${!disabled ? 'pointer' : 'not-allowed'};
    padding: 12px 24px;
    color: ${!disabled ? theme.color.white : theme.color.dark};
  `}
`;

export { Button }
