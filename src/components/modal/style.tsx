import styled, { css } from 'styled-components';
import Modal from 'react-modal';

const StyledModal = styled(Modal)`
  ${({ theme }) => css`
    &__overlay {
      background: ${theme.color.backDrop};
      display: flex;
      align-items: flex-start;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      overflow-x: hidden;
      z-index: 1000;
      padding: 0 1.2rem;
    }

    &__content {
      max-width: 700px;
      position: relative;
      padding: 1.2rem;
      background: #ffffff;
      background-clip: padding-box;
      box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);
      margin: 50px auto;
    }
  `}
`;

export { StyledModal }
