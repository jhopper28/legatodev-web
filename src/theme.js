import { config } from 'rebass'

const baseColors = {
  black: '#092925',
  white: '#fff',
  blue: '#8ddeff',
  red: '#f7b',
  green: '#179e2c',
  yellow: '#f7da00',
  gray: '#eef',
  midgray: '#ccd',
}

const theme = {
  fontFamily: 'Open Sans, sans-serif',
  letterSpacing: '.1em',
  color: baseColors.black,
  backgroundColor: baseColors.white,

  colors: {
    ...config.colors,
    ...baseColors,
    default: baseColors.midgray,
    primary: baseColors.blue,
    secondary: baseColors.midgray,
    info: baseColors.blue,
    error: baseColors.red,
    success: baseColors.green,
    warning: baseColors.yellow
  },
  inverted: baseColors.black,

  scale: [
    0, 16, 20, 64, 128
  ],

  bold: 700,

  Heading: {
    fontFamily: 'Exo, sans-serif'
  },
  Button: {
    fontSize: 20
  }
}

export default theme
