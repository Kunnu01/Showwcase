import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    color: ${({ theme }): string => theme.fontColor};
    height: 100%;
  }
  html {
    height: 100%;
  }
  
  .modal-overlay {
    display: flex;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: ${({ theme }): string => theme.color.backDrop};
  }

  .modal-content {
    max-width: 700px;
    position: relative;
    padding: 1.2rem;
    background: ${({ theme }): string => theme.color.white};
    background-clip: padding-box;
    box-shadow: ${({ theme }): string => theme.color.modalShadow};
    margin: auto auto;
  }
  
  #root {
    height: 100%;
  }
`

export { GlobalStyle }
