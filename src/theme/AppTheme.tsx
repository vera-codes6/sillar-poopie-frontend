import * as React from 'react'
import { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { colorSchemes, typography, shape, breakpoints } from './themePrimitives'
import customizations from './customizations'

interface AppThemeProps {
  children: React.ReactNode
}

export default function AppTheme(props: AppThemeProps) {
  const { children } = props

  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: {
          colorSchemeSelector: 'data-mui-color-scheme'
        },
        colorSchemes,
        breakpoints,
        typography,
        shape,
        components: { ...customizations }
      }),
    []
  )

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange defaultMode='dark'>
      {children}
    </ThemeProvider>
  )
}
