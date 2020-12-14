import React from 'react';
import styled, { css } from 'styled-components';
import { Nav } from '../nav'
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { Welcome } from '../welcome'
import { EducationPage } from 'containers/Education';

const LayoutStyle = styled.div`
  ${css`
    display: flex;
    flex-direction: column;
    height: 100%;
    > main {
      margin: 0;
      flex: 1;
    }
  `}
`


const Layout = () => (
  <LayoutStyle>
    <Nav />
    <main>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <PrivateRoute exact path="/education" component={EducationPage} />
        <Route path="*" render={() => <Redirect from="*" to={`/`} />} />
      </Switch>
    </main>
  </LayoutStyle>
)

export { Layout }
