const theme = {
  fontColor: '#22262a',
  fontFamily: 'Open sans, sans-serif',
  color: {
    primary: '#5a71d9',
    secondary: '#22262a',
    dark: '#22272a',
    grey: '#ddd',
    white: '#ffffff',
    backDrop: 'rgba(0, 0, 0, 0.75)',
    modalShadow: '0 12px 15px 0 rgba(0, 0, 0, 0.25)',
    red: 'red',
  }
}

type Theme = typeof theme

export { theme }
export type { Theme }
