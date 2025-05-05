import { Box, Button, Modal, styled, Menu, MenuItem, Stack, Typography, IconButton } from '@mui/material'

import Metamask from '@/assets/svg/meta-mask.svg'
import Phantom from '@/assets/svg/Phantom.svg'
import Solflare from '@/assets/svg/Solflare.svg'
import More from '@/assets/svg/More.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import Translations from '../../Translations'
import CloseIcon from '@mui/icons-material/Close'

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

const ModalButton = styled(Button)(({ theme }) => ({
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

export default function ConnectModal({ open, handleOpen }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleMoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <ModalContainer open={open} onClose={handleOpen}>
      <ModalBox>
        <Typography
          width='80%'
          ml='10%'
          sx={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '32px'
          }}
        >
          <Translations text='connect_modal.title' />
        </Typography>
        <Stack direction='column' spacing='12px'>
          <ModalButton startIcon={<Metamask />}>Metamask</ModalButton>
          <ModalButton startIcon={<Phantom />}>Phantom</ModalButton>
          <ModalButton startIcon={<Solflare />}>Solflare</ModalButton>
          <ModalButton
            id='connect-more-button'
            aria-controls={isMenuOpen ? 'connect-more-menu' : undefined}
            aria-haspopup='true'
            startIcon={<More />}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleMoreClick}
          >
            More
          </ModalButton>
        </Stack>
        <Menu
          id='connect-more-menu'
          open={isMenuOpen}
          onClose={() => setAnchorEl(null)}
          onClick={() => setAnchorEl(null)}
          anchorEl={anchorEl}
          MenuListProps={{
            'aria-labelledby': 'connect-more-button'
          }}
          sx={{ width: '300px' }}
        >
          <MenuItem>ASDF</MenuItem>
          <MenuItem>ZXCV</MenuItem>
        </Menu>
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
