import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Container } from 'components/container';
import { useSelector } from 'react-redux';
import { State } from 'model/common';
import { Button } from 'components/button';
import { EducationModal } from 'components/modal';

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    .greeting {
      text-align: center;
      margin-bottom: 15px;
      font-size: 24px;
    }
  `}
`;

const EducationPage = () => {
  const [showModal, setShowModal] = useState(false)
  const { name } = useSelector((state: State) => state.session)

  const handleCloseModal = () => {
    setShowModal(false)
  }
  
  return (
    <Container>
      <Wrapper>
        <div className="greeting">
          <p>Welcome to <span><strong>{name}'s</strong></span> education profile</p>
          <Button onClick={() => setShowModal(true)}>Add Education</Button>
        </div>
        <EducationModal
          style={{ content: { width: '600px' } }}
          isOpen={showModal}
          onRequestClose={handleCloseModal}
        />
      </Wrapper>
    </Container>
  )
}

export { EducationPage }
