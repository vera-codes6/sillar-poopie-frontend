import { createTheme, alpha } from '@mui/material/styles'
import { fontFamily, fontWeight } from '@mui/system'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true
  }
}
declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  interface Palette {
    baseShadow: string
  }
}

const defaultTheme = createTheme()

export const colors = {
  black: '#000',
  black10: '#101010',
  black14: '#141414',
  black19: '#191919',
  black24: '#242424',
  black31: '#313131',
  black34: '#343434',
  black74: '#747474',
  black1A: '#1A1A1A',
  black1F: '#1F1F1F',
  black9F: '#9F9F9F',
  white: '#FFF',
  rise: '#2EBE7B',
  fall: '#DA5C54',
  yellowText: '#FFD258',
  communityBg: '#F1CF58',
  footerDivider: 'rgba(255, 255, 255, 0.16)',
  completed: '#2EBE7B',
  ongoing: '#F6851B',
  falled: '#DA5C54',
  tableOddRow: '#FFFFFF',
  tableEvenRow: '#FAF7F4',
  transAmountDark: '#FFD258',
  transAmountLight: '#F6851B'
}

export const brand = {
  50: 'hsl(210, 100%, 95%)',
  100: 'hsl(210, 100%, 92%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 65%)',
  400: 'hsl(210, 98%, 48%)',
  500: 'hsl(210, 98%, 42%)',
  600: 'hsl(210, 98%, 55%)',
  700: 'hsl(210, 100%, 35%)',
  800: 'hsl(210, 100%, 16%)',
  900: 'hsl(210, 100%, 21%)'
}

export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)'
}

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)'
}

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)'
}

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)'
}

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: 'rgba(20, 20, 20, 0.04)',
        main: brand[400],
        dark: '#141414',
        contrastText: '#141414'
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: '#FFF', // button group
        contrastText: gray[50]
      },
      warning: {
        light: '#EED6B7', //section3 bg
        main: orange[400],
        dark: 'rgb(242, 221, 195)' //section divider color
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800]
      },
      success: {
        light: green[300],
        main: green[400],
        dark: '#FFF'
      },
      grey: {
        ...gray
      },
      divider: '#000',
      background: {
        default: '#F2DDC3',
        paper: '#EED6B7'
      },
      text: {
        primary: '#141414',
        secondary: gray[600],
        warning: orange[400]
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`
      },
      baseShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px'
    }
  },
  dark: {
    palette: {
      primary: {
        light: 'rgba(255, 210, 88, 0.04)', // accordion bg
        main: brand[400],
        dark: '#FFD258', // accordion border
        contrastText: '#9F9F9F'
      },
      info: {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: '#141414'
      },
      warning: {
        light: '#191919', // section3 bg
        main: orange[500],
        dark: 'rgb(20, 20, 20)' // section divider color
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700]
      },
      success: {
        light: green[400],
        main: green[500],
        dark: '#343434'
      },
      grey: {
        ...gray
      },
      divider: '#FFF',
      background: {
        default: '#141414',
        paper: '#242424'
      },
      text: {
        primary: 'hsl(0, 0%, 100%)',
        secondary: gray[400]
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3)
      },
      baseShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
    }
  }
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 640,
    md: 900,
    lg: 1100,
    xl: 1240
  }
}

export const typography = {
  fontFamily: 'Inter',
  h1: {
    fontFamily: 'Mountains of Christmas',
    fontSize: 'clamp(5.625rem, 3.2042rem + 10.3286vw, 12.5rem)',
    fontWeight: 400,
    letterSpacing: '4px'
  },
  h2: {
    fontFamily: 'Mountains of Christmas',
    fontSize: 'clamp(6.25rem, 1.8486rem + 18.7793vw, 18.75rem)',
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '18px'
  },
  h3: {
    // Section Title
    fontFamily: 'Mountains of Christmas',
    fontSize: 'clamp(2.5rem, 1.6197rem + 3.7559vw, 5rem)',
    fontWeight: 700,
    lineHeight: 1.2
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24)
  },
  h5: {
    // Notification Title
    fontSize: defaultTheme.typography.pxToRem(16),
    fontWeight: 500,
    fontFamily: 'Inter'
  },
  h6: {
    // Logo
    fontSize: defaultTheme.typography.pxToRem(34),
    fontWeight: 700,
    fontFamily: 'Mountains of Christmas'
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18)
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500
  },
  body1: {
    fontSize: 'clamp(1rem, 0.8239rem + 0.7512vw, 1.5rem)',
    fontWeight: 400,
    lineHeight: 'clamp(1.5rem, 1.3239rem + 0.7512vw, 2rem)'
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
    lineHeight: defaultTheme.typography.pxToRem(24),
    color: '#000'
  }
}

export const shape = {
  // borderRadius: 100
}
