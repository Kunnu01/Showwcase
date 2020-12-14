import React from 'react';
import styled, { css } from 'styled-components';

const Styled = styled.div`
  ${css`
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
    @media only screen and (min-width: 1500px) {
      max-width: 1500px;
    }
  `}
`;

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Styled>{ children }</Styled>
)

export { Container }
