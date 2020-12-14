import React, { useEffect, useState } from 'react';
import { Container } from '../../components/container'
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../model/common'
import { useHistory } from 'react-router-dom';
import { Input } from '../../components/input'
import { Button } from '../../components/button';
import { setCurrentUser } from 'actions/session';

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    top: -10%;
    height: 100%;
    > p {
      color: ${theme.color.dark};
      font-size: 24px;
      margin-bottom: 10px;
    }
    label {
      color: ${theme.fontColor};
      font-size: 18px;
      margin: 20px 0 10px 0;
    }
  `}
`;

const Welcome = () => {
  const [userName, setUserName] = useState('');
  const name = useSelector((state: State) => state.session.name)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (name) {
      history.push('/education')
    }
  }, [name, history])

  const handleClick = () => {
    dispatch(setCurrentUser(userName))
  }

  return (
    <Container>
      <Wrapper>
        <p>Hi, there! Welcome to your education showcase.</p>
        <label>Type your name and click "Enter" below to begin!</label>
        <Input
          type="text"
          placeholder="Foo Bar"
          fullWidth={false}
          onChange={(e: Record<string, any>) => setUserName(e.currentTarget.value)}
        />
        <Button onClick={handleClick} disabled={!userName.trim()}>
          Submit
        </Button>
      </Wrapper>
    </Container>
  )
}

export { Welcome }
