import { Box, Button, Modal, styled, Stack, Typography, IconButton } from '@mui/material'
import Translations from '../../Translations'
import { COPY, SELECT, tempTokens } from '@/constants/tokenModal'
import TokenListItem from './TokenListItem'
import AppIcon from '@/components/AppIcon'
import { colors } from '@/theme/themePrimitives'

const ModalContainer = styled(Modal)(({ theme }) => ({
  ...theme.applyStyles('dark', {
    background: 'rgba(25, 25, 25, 0.85)'
  }),
  ...theme.applyStyles('light', {
    background: 'rgba(238, 214, 183, 0.95)'
  })
}))

const ModalBox = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  gap: '24px',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  ...theme.applyStyles('light', {
    border: `1px solid ${colors.white}`,
    background: '#F6E6CD'
  }),
  ...theme.applyStyles('dark', {
    border: `1px solid ${colors.black31}`,
    background: colors.black24
  })
}))

const TokenButton = styled(Button)(({ theme }) => ({
  borderRadius: '100px',
  padding: '8px 12px',
  border: '1px solid #DEC29E',
  background: '#EED6B7',
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: 'Inter',
  margin: '5px',
  color: theme.palette.text.primary,
  ...theme.applyStyles('dark', {
    border: `1px solid ${colors.black31}`,
    background: colors.black14
  })
}))

const ModalLabel = styled('span')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 500,
  color: colors.black74
})

interface Props {
  open: boolean
  handleOpen: () => void
  handleToken: (selToken: string) => void
}

const recentTokens = ['USDT', 'SOL', 'RAY', 'USDT']

export default function TokenModal({ open, handleOpen, handleToken }: Props) {
  const handleAction = (action: string, data: string) => {
    if (action === COPY) {
      console.log(COPY)
    } else if (action === SELECT) {
      handleToken(data)
      handleOpen()
    }
  }

  return (
    <ModalContainer open={open} onClose={handleOpen}>
      <ModalBox
        sx={{
          width: { xs: '90%', lg: '550px' },
          padding: { xs: '16px', lg: '24px' }
        }}
      >
        <Stack direction='row'>
          <Typography
            sx={{
              fontSize: { xs: '18px', lg: '24px' },
              fontWeight: 600
            }}
          >
            <Translations text='token_modal.title' />
          </Typography>
        </Stack>
        <Stack
          direction='row'
          sx={theme => ({
            borderRadius: '100px',
            border: `1px solid ${colors.black31}`,
            alignItems: 'center',
            background: colors.black14,
            padding: '11px 16px',
            color: colors.black74,
            ...theme.applyStyles('light', {
              background: colors.white
            })
          })}
        >
          <input
            style={{
              fontSize: '16px',
              fontWeight: 400,
              width: '100%'
            }}
            placeholder='Search token'
          />
          <AppIcon name='search' />
        </Stack>
        <Box width='100%'>
          <ModalLabel>
            <Translations text='token_modal.recent' />
          </ModalLabel>
          <Box
            sx={{
              display: { xs: 'block', lg: 'flex' },
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            {recentTokens.map((token, index) => (
              <TokenButton
                key={`tokenbtn${index}`}
                startIcon={<AppIcon name='usdt' />}
                onClick={() => handleAction(SELECT, token)}
              >
                {token}
              </TokenButton>
            ))}
          </Box>
        </Box>
        <Box width='100%'>
          <Stack direction='row' justifyContent='space-between'>
            <ModalLabel>
              <Translations text='token_modal.alltokens' />
            </ModalLabel>
            <ModalLabel>
              <Translations text='token_modal.balance' />
            </ModalLabel>
          </Stack>
        </Box>
        <Stack
          direction='column'
          spacing='24px'
          sx={{
            height: '310px',
            overflowY: 'auto'
          }}
        >
          {tempTokens.map((token, index) => (
            <TokenListItem key={`item${index}`} data={token} handleAction={handleAction} />
          ))}
        </Stack>

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
          <AppIcon name='close' />
        </IconButton>
      </ModalBox>
    </ModalContainer>
  )
}
