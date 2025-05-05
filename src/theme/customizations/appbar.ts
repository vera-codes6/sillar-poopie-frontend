import { Components, Theme } from '@mui/material/styles'

export const appbarCustomizations: Components<Theme> = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent'
      }
    }
  }
}
