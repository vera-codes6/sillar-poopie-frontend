import { useState } from 'react'
import { Box, Button, Modal, styled, IconButton } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import Login from './Login'
import { AUTH_STEP } from '@/constants/authModal'
import Register from './Register'
import Verify from './Verify'

const ModalContainer = styled(Modal)(({ theme }) => ({
  ...theme.applyStyles('dark', {
    background: 'rgba(25, 25, 25, 0.85)'
  }),
  ...theme.applyStyles('light', {
    background: 'rgba(238, 214, 183, 0.95)'
  })
}))

export const ModalBox = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  gap: '24px',
  [theme.breakpoints.up('xl')]: {
    width: '350px'
  },
  [theme.breakpoints.up('md')]: {
    width: '80%'
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%'
  },
  width: '350px',
  padding: '24px',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  ...theme.applyStyles('light', {
    border: '1px solid #FFF',
    background: '#F6E6CD'
  }),
  ...theme.applyStyles('dark', {
    border: '1px solid #313131',
    background: '#242424'
  })
}))

export const ModalButton = styled(Button)(({ theme }) => ({
  borderRadius: '100px',
  padding: '16px 24px',
  color: theme.palette.text.primary,
  ...theme.applyStyles('dark', {
    border: '1px solid #313131',
    background: '#141414'
  }),
  ...theme.applyStyles('light', {
    border: '1px solid #FFF',
    background: '#EED6B7'
  })
}))

interface Props {
  open: boolean
  handleOpen: () => void
}

export interface AuthComponentProps {
  setStep: (step: string) => void
}

export default function AuthModal({ open, handleOpen }: Props) {
  const [currentStep, setCurrentStep] = useState<string>(AUTH_STEP.LOGIN)
  const [email, setEmail] = useState<string>('')

  const setStep = (step: string) => {
    setCurrentStep(step)
  }

  const handleEmail = (email: string) => {
    setEmail(email)
  }

  return (
    <ModalContainer open={open} onClose={handleOpen}>
      <ModalBox>
        {currentStep == AUTH_STEP.LOGIN ? (
          <Login setStep={setStep} />
        ) : currentStep == AUTH_STEP.REGISTER ? (
          <Register handleEmail={handleEmail} setStep={setStep} />
        ) : (
          <Verify email={email} setStep={setStep} />
        )}

        <IconButton
          onClick={handleOpen}
          sx={{
            width: '14px',
            height: '14px',
            position: 'absolute',
            right: '24px',
            top: '24px'
          }}
        >
          <CloseIcon />
        </IconButton>
      </ModalBox>
    </ModalContainer>
  )
}
