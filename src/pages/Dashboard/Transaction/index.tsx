import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { useEffect, useState } from 'react'

import { StatusLabel } from './StatusLabel'
import BuyPoopie from '../Home/BuyPoopie'
import { colors } from '@/theme/themePrimitives'
import AppIcon from '@/components/AppIcon'
import { fetchTransactions } from '@/services/transServices'
import { TransactionResponse, TransactionType } from '@/types/transaction'
import { handleError } from '@/utils'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {},
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
  border: 'none',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}))

export default function Transaction() {
  const [transList, setTransList] = useState<TransactionType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchList = async (pageNumber: number, pageSize: number) => {
    try {
      setIsLoading(true)
      var response = await fetchTransactions(pageNumber, pageSize)
      setTransList((response as TransactionResponse).data)
    } catch (error) {
      handleError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchList(1, 10)
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        padding: { xs: '152px 20px 16px 20px', lg: '134px 24px 24px 32px' },
        width: '100%',
        gap: '24px'
      }}
    >
      <Stack direction='column' sx={{ gap: { xs: '24px', lg: '60px' }, width: { xs: '100%', lg: '70%' } }}>
        <TableContainer component={Paper}>
          <Table aria-label='transaction history table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Type</StyledTableCell>
                <StyledTableCell>Amount</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transList.map((item, index) => (
                <TableRow
                  key={`row${index}`}
                  sx={theme => ({
                    ...theme.applyStyles('dark', {
                      backgroundColor: index % 2 ? colors.black1F : colors.black19
                    }),
                    ...theme.applyStyles('light', {
                      backgroundColor: index % 2 ? colors.tableOddRow : colors.tableEvenRow
                    }),
                    border: 'none'
                  })}
                >
                  <StyledTableCell align='left'>#14525156</StyledTableCell>
                  <StyledTableCell align='left'>{item.type}</StyledTableCell>
                  <StyledTableCell align='left'>
                    <Box
                      component='span'
                      sx={theme => ({
                        ...theme.applyStyles('dark', {
                          color: colors.transAmountDark
                        }),
                        ...theme.applyStyles('light', {
                          color: colors.transAmountLight
                        })
                      })}
                    >
                      {item.amount}
                    </Box>{' '}
                    $POI
                  </StyledTableCell>
                  <StyledTableCell align='left'>{new Date(item.date).toDateString()}</StyledTableCell>
                  <StyledTableCell align='left'>
                    <StatusLabel status={item.status} />
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <IconButton>
                      <AppIcon name='link' />
                    </IconButton>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {isLoading && <CircularProgress color='inherit' sx={{ m: 'auto' }} />}
      </Stack>
      <Stack direction='column' spacing='24px' sx={{ width: { xs: '100%', lg: '30%' } }}>
        <BuyPoopie />
      </Stack>
    </Box>
  )
}
