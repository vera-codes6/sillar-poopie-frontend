import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import { AuthComponentProps, ModalButton } from '..'
import Translations from '@/components/Translations'
import AppIcon from '@/components/AppIcon'
import { Box } from '@mui/system'
import { AuthFormData } from '@/types/auth'
import { registerUser } from '@/services/userServices'
import { handleError } from '@/utils'
import { AUTH_STEP } from '@/constants/authModal'
import { useState } from 'react'

interface RegisterProps extends AuthComponentProps {
  handleEmail: (email: string) => void
}

export default function Register({ handleEmail, setStep }: RegisterProps) {
  const [isProcessing, setIsProcessing] = useState<boolean>(false)

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup
      .string()
      .email('Email is invalid')
      .required('Email is required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is invalid'),
    gender: yup.string().required('Gender is required'),
    password: yup.string().required('Password is required')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      gender: 'Male',
      password: ''
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (formData: AuthFormData) => {
    if (!isProcessing) {
      try {
        setIsProcessing(true)
        await registerUser(formData)
        handleEmail(formData.email)
        toast('Registered Successfully', { type: 'success' })
        setStep(AUTH_STEP.VERIFY)
      } catch (error) {
        handleError(error)
      } finally {
        setIsProcessing(false)
      }
    }
  }

  const onLoginClicked = async () => {
    setStep(AUTH_STEP.LOGIN)
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
        <Translations text='auth_modal.register_title' />
      </Typography>
      <Stack component='form' direction='column' spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction='column' spacing={1}>
          <TextField aria-label='username' label='Username' type='text' variant='outlined' {...register('username')} />
          {errors.username && <Typography color='error'>{errors.username.message}</Typography>}
        </Stack>
        <Stack direction='column' spacing={1}>
          <TextField aria-label='email' label='Email' type='text' variant='outlined' {...register('email')} />
          {errors.email && <Typography color='error'>{errors.email.message}</Typography>}
        </Stack>
        <Stack direction='column' spacing={1}>
          <FormLabel id='demo-gender-label'>
            <Typography>
              <Translations text='auth_modal.gender' />
            </Typography>
          </FormLabel>
          <RadioGroup aria-labelledby='demo-gender-label' defaultValue='Male' {...register('gender')} row>
            <FormControlLabel value='Male' control={<Radio />} label='Male' />
            <FormControlLabel value='Female' control={<Radio />} label='Female' />
            <FormControlLabel value='Other' control={<Radio />} label='Other' />
          </RadioGroup>
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
        <ModalButton type='submit' startIcon={<AppIcon name='register' />}>
          Register
        </ModalButton>
        <ModalButton startIcon={<AppIcon name='login' />} onClick={onLoginClicked}>
          Login
        </ModalButton>
      </Stack>
    </Box>
  )
}
