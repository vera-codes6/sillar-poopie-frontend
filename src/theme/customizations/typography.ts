import { Components, Theme } from '@mui/material'

export const typographyCustomizations: Components<Theme> = {
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: {
              variant: 'h3'
            },
            style: {
              ...theme.applyStyles('light', {
                WebkitTextStrokeWidth: '2px',
                WebkitTextStrokeColor: '#141414'
              })
            }
          }
        ]
      })
    }
  }
}
