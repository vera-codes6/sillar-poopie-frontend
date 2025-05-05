import { useEffect, useState } from 'react'

import { GrayBox } from '@/components/GrayBox'
import Translations from '@/components/Translations'
import { Button, Stack, Typography } from '@mui/material'
import TransHistoryItem from './TransHistoryItem'
import AppIcon from '@/components/AppIcon'
import { TransactionType } from '@/types/transaction'
import { TransactionResponse } from '@/types/transaction'
import { fetchTransactions } from '@/services/transServices'
import { handleError } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

export default function TransHistory() {
  const navigate = useNavigate()
  const [transList, setTransList] = useState<TransactionType[]>([])

  const fetchTransData = async () => {
    try {
      const response = await fetchTransactions(1, 6)
      setTransList((response as TransactionResponse).data)
    } catch (error) {
      handleError(error)
    }
  }

  useEffect(() => {
    fetchTransData()
  }, [])

  const onClickTransHistory = () => {
    navigate(ROUTES.DASHBOARD.TRANSACTION)
  }

  return (
    <GrayBox
      sx={{
        padding: '16px',
        gap: '16px'
      }}
    >
      <Typography component='h5' variant='h5' sx={{ fontSize: '20px', fontWeight: 600 }}>
        <Translations text='home.recenttrans' />
      </Typography>
      <Stack direction='column' spacing='8px'>
        {transList.map((item, index) => (
          <TransHistoryItem key={`transList${index}`} data={item} />
        ))}
      </Stack>
      <Button sx={{ width: '100%' }} size='medium' endIcon={<AppIcon name='east' />} onClick={onClickTransHistory}>
        <Translations text='home.viewhistory' />
      </Button>
    </GrayBox>
  )
}
