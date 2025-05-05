import { Button, styled } from '@mui/material'

export const StrokeButton = styled(Button)(({ theme }) => ({
  color: '#FFD258',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 500,
  background: 'none',
  padding: '2px',
  border: 'none',
  borderRadius: '1px',
  transition: 'all .1s ease-out',
  ...theme.applyStyles('light', {
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000'
  })
}))
