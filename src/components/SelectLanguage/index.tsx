import { languageCodes } from '@/constants/languageCodes'
import { useLocales } from '@/hooks'
import { Button, Menu, MenuItem, Stack, StackProps, Theme, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CircleFlag } from 'react-circle-flags'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { localStorageGetItem } from '@/utils'
import { colors } from '@/theme/themePrimitives'

const btnStyle = (theme: Theme) => ({
  color: theme.palette.text.primary,
  padding: '12px 10px',
  border: 'none',
  borderRadius: '6px',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
    background: colors.black19
  }),
  ...theme.applyStyles('light', {
    background: colors.white
  }),
  [theme.breakpoints.down('lg')]: {
    padding: '12px 0'
  }
})

const btnTextStyle = (theme: Theme) => ({
  color: theme.palette.text.primary,
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  },
  fontSize: '14px',
  fontWeight: 500
})

interface Props {
  isInDashboard?: boolean
}

const LanguagePicker = ({ isInDashboard }: Props & Partial<StackProps>) => {
  const { currentLang, onChangeLang } = useLocales()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>(currentLang.value)
  const open = Boolean(anchorEl)

  if (localStorageGetItem('i18nextLng') !== selectedLanguage) {
    setSelectedLanguage(localStorageGetItem('i18nextLng'))
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    onChangeLang(language)
    handleClose()
  }

  const active = languageCodes.find(e => e.value === selectedLanguage)

  return (
    <Stack direction='row' alignItems='center'>
      <Button
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup='true'
        sx={isInDashboard ? btnStyle : { background: 'transparent', border: 'none', px: 'auto', color: 'text.primary' }}
        onClick={handleClick}
      >
        <CircleFlag countryCode={active?.code || 'us'} width='16px' height='16px' title={active?.label} alt='flag' />
        <Typography ml={1} fontSize='18px' sx={isInDashboard ? btnTextStyle : {}}>
          {active?.label.toUpperCase() || 'EN'}
        </Typography>
        <KeyboardArrowDownIcon />
      </Button>

      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-picker-button'
        }}
        sx={{ borderRadius: 0 }}
      >
        {languageCodes.map(language => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.value)}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <CircleFlag countryCode={language.code} width='16px' height='16px' title={language.label} alt='flag' />
            <Typography ml={1} sx={{ fontSize: '18px' }}>
              {language.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  )
}

export default LanguagePicker
