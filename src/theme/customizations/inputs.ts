import { Components, Theme } from '@mui/material/styles'
import { colors } from '../themePrimitives'

export const inputCustomizations: Components<Theme> = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in'
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        color: colors.black,
        borderTopLeftRadius: '100px',
        borderTopRightRadius: '100px',
        borderBottomLeftRadius: '100px',
        borderBottomRightRadius: '100px',
        variants: [
          {
            props: {
              size: 'small'
            },
            style: {
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '24px',
              color: colors.black,
              paddingLeft: '20px',
              paddingRight: '20px'
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              padding: '8px 20px'
            }
          },
          {
            props: {
              size: 'large'
            },
            style: {
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '24px',
              color: colors.black
            }
          },
          {
            props: {
              color: 'primary'
            },
            style: {
              background: colors.yellowText,
              border: `1px solid ${theme.palette.divider}`
            }
          },
          {
            props: {
              color: 'info'
            },
            style: {
              background: colors.white,
              border: `1px solid ${theme.palette.divider}`
            }
          },
          {
            props: {
              color: 'secondary'
            },
            style: {
              background: `${theme.palette.info.dark}`,
              color: `${theme.palette.text.primary}`,
              ...theme.applyStyles('light', {
                border: `1px solid ${colors.black}`
              }),
              ...theme.applyStyles('dark', {
                border: `1px solid ${colors.black31}`
              })
            }
          },
          {
            props: {
              variant: 'outlined'
            },
            style: {
              ...theme.applyStyles('dark', {
                background: 'transparent',
                border: `1px solid ${colors.yellowText}`,
                color: colors.yellowText
              }),
              ...theme.applyStyles('light', {
                backgroundColor: colors.white,
                border: `1px solid ${colors.black}`,
                color: colors.black
              })
            }
          }
        ]
      })
    }
  }
}
