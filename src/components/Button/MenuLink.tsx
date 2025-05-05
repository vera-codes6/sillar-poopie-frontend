import { Box } from '@mui/material'
import { ReactNode, useCallback } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
  onClick?: () => void
  to?: string
  padding?: string
}

export default function MenuLink({ children, onClick, to, padding }: Props) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (onClick) {
      onClick()
    }
  }, [])

  return (
    <Box
      component={Link}
      to={to ? to : '#'}
      sx={theme => ({
        position: 'relative',
        color: 'text.primary',
        fontSize: '18px',
        background: 'rgba(0,0,0,0)',
        border: 'none',
        cursor: 'pointer',
        width: { md: 'fit-content' },
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          transform: 'scaleX(0)',
          borderBottom: `1px solid ${theme.palette.text.primary}`,
          transition: 'all .2s ease-out'
        },
        '&:hover': {
          '&::after': {
            transform: 'scaleX(1)'
          }
        },
        p: padding
      })}
      onClick={handleClick}
    >
      {children}
    </Box>
  )
}
