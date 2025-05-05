import { Stack, TextField, Typography } from '@mui/material'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { AuthComponentProps, ModalButton } from '..'
import Translations from '@/components/Translations'
import AppIcon from '@/components/AppIcon'
import { Box } from '@mui/system'
import { AuthFormData } from '@/types/auth'
import { loginUser } from '@/services/userServices'
import { handleError } from '@/utils'
import { ROUTES } from '@/constants/routes'
import { AUTH_STEP } from '@/constants/authModal'
import { connectSocket } from '@/lib/socket'
import { dispatch, login } from '@/store'

export default function Login({ setStep }: AuthComponentProps) {
  const navigate = useNavigate()

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email is invalid')
      .required('Email is required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is invalid'),
    password: yup.string().required('Password is required')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (formData: AuthFormData) => {
    try {
      const response = await loginUser(formData)
      dispatch(login({ user: response.data.user, accessToken: response.data.jwt }))

      await connectSocket()

      navigate(ROUTES.DASHBOARD.HOME)
    } catch (error) {
      handleError(error)
    }
  }

  const onRegisterClicked = async () => {
    setStep(AUTH_STEP.REGISTER)
  }

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
        <Translations text='auth_modal.login_title' />
      </Typography>
      <Stack component='form' direction='column' spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction='column' spacing={1}>
          <TextField aria-label='email' label='Email' type='text' variant='outlined' {...register('email')} />
          {errors.email && <Typography color='error'>{errors.email.message}</Typography>}
        </Stack>
        <Stack direction='column' spacing={1}>
          <TextField
            aria-label='password'
            label='Password'
            type='password'
            variant='outlined'
            {...register('password')}
          />
          {errors.password && <Typography color='error'>{errors.password.message}</Typography>}
        </Stack>
        <ModalButton type='submit' startIcon={<AppIcon name='login' />}>
          Login
        </ModalButton>
        <ModalButton startIcon={<AppIcon name='register' />} onClick={onRegisterClicked}>
          Register
        </ModalButton>
      </Stack>
    </Box>
  )
}
