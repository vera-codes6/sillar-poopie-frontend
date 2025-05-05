import { Box, Button, styled } from '@mui/material'
import { useState } from 'react'
import TokenModal from '../Modal/TokenModal'
import AppIcon from '../AppIcon'
import { colors } from '@/theme/themePrimitives'

export const GrayBox = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  ...theme.applyStyles('dark', {
    background: colors.black19
  }),
  ...theme.applyStyles('light', {
    background: colors.white
  })
}))

export const GrayInput = styled(Box)(({ theme }) => ({
  borderRadius: '12px',
  background: colors.black10,
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: colors.black10,
  border: 'none',
  ...theme.applyStyles('light', {
    backgroundColor: colors.white,
    border: `1px solid ${colors.black14}`
  })
}))

export const TokenPicker = () => {
  const [token, setToken] = useState<string>('USDT')
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  const handleToken = (selToken: string) => {
    setToken(selToken)
  }

  return (
    <>
      <Button
        startIcon={<AppIcon name='usdt' />}
        endIcon={<AppIcon name='down' />}
        sx={{
          color: colors.black74,
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: 500,
          background: 'none',
          border: 'none',
          padding: '4px 0',
          borderRadius: 0
        }}
        onClick={handleModalOpen}
      >
        {token}
      </Button>
      <TokenModal open={modalOpen} handleOpen={handleModalOpen} handleToken={handleToken} />
    </>
  )
}
