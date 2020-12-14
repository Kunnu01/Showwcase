import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from 'components/container';

const NavStyle = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.primary};
    padding: 10px 15px;
  `}
`;

const Nav = () => (
  <NavStyle>
    <Container>
      <h1>Showwcase</h1>
    </Container>
  </NavStyle>
);

export { Nav };
