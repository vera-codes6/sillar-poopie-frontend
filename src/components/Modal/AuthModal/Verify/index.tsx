import { Stack, TextField, Typography } from '@mui/material'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { AuthComponentProps, ModalButton } from '..'
import Translations from '@/components/Translations'
import AppIcon from '@/components/AppIcon'
import { Box } from '@mui/system'
import { VerifyEmailFormData } from '@/types/auth'
import { verifyEmail } from '@/services/userServices'
import { handleError } from '@/utils'
import { AUTH_STEP } from '@/constants/authModal'
import { useCallback, useEffect, useState } from 'react'

const schema = yup.object().shape({
  email: yup.string().required(''),
  code: yup.string().length(6).required('Verification Code is invalid.')
})

interface VerifyProps extends AuthComponentProps {
  email: string
}

const Verify = ({ email, setStep }: VerifyProps) => {
  const [time, setTime] = useState<number>(60)

  const decreaseTime = () => {
    console.log(time)
    if (time <= 0) setStep(AUTH_STEP.REGISTER)
    else setTime(prev => prev - 1)
  }

  useEffect(() => {
    const intervalId = setInterval(decreaseTime, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: email,
      code: ''
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = useCallback(async (formData: VerifyEmailFormData) => {
    try {
      await verifyEmail(formData)
      toast('Verified Email Successfully!', { type: 'success' })
      setStep(AUTH_STEP.LOGIN)
    } catch (error) {
      handleError(error)
    }
  }, [])

  return (
    <Box>
      <Typography
        width='80%'
        ml='10%'
        sx={{
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '32px',
          marginBottom: '10px'
        }}
      >
        <Translations text='auth_modal.verify_title' />
      </Typography>
      <Stack component='form' direction='column' spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction='column' spacing={1}>
          <TextField aria-label='email' label='Email' type='text' variant='outlined' {...register('email')} hidden />
          {errors.email && <Typography color='error'>{errors.email.message}</Typography>}
        </Stack>
        <Stack direction='column' spacing={1}>
          <TextField aria-label='code' label='Code' type='text' variant='outlined' {...register('code')} />
          {errors.code && <Typography color='error'>{errors.code.message}</Typography>}
        </Stack>
        <Typography component='p' textAlign='center'>
          {time}s left
        </Typography>
        <ModalButton type='submit' startIcon={<AppIcon name='verify' />}>
          Verify
        </ModalButton>
      </Stack>
    </Box>
  )
}

export default Verify
