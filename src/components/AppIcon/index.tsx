import { memo } from 'react'

import { Stack } from '@mui/material'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CloseIcon from '@mui/icons-material/Close'
import DiscordIcon from '@/assets/svg/discord.svg'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import SouthEastIcon from '@mui/icons-material/SouthEast'
import SouthIcon from '@mui/icons-material/South'
import EastIcon from '@mui/icons-material/East'
import AddIcon from '@mui/icons-material/Add'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import USDTIcon from '@/assets/svg/usdt-token.svg'
import Cloud from '@/assets/svg/cloud.svg'
import YellowStar from '@/assets/svg/yellow-star.svg'
import WhiteStar from '@/assets/svg/white-star.svg'
import BlackStar from '@/assets/svg/black-star.svg'
import DashboardIcon from '@/assets/svg/Dashboard.svg'
import TransactionsIcon from '@/assets/svg/Transactions.svg'
import MarketIcon from '@/assets/svg/Market.svg'
import NotificationIcon from '@/assets/svg/Notification.svg'
import SettingsIcon from '@/assets/svg/Setting.svg'
import SupportIcon from '@/assets/svg/Support.svg'
import LogoutIcon from '@/assets/svg/Logout.svg'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import LoginIcon from '@mui/icons-material/Login'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import LinkIcon from '@mui/icons-material/Link'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'

import { colors } from '@/theme/themePrimitives'

const ICON_MAPS = {
  cloud: Cloud,
  yellowStar: YellowStar,
  whiteStar: WhiteStar,
  blackStar: BlackStar,
  rise: NorthEastIcon,
  fall: SouthEastIcon,
  left: KeyboardArrowLeftRoundedIcon,
  right: KeyboardArrowRightRoundedIcon,
  down: KeyboardArrowDownIcon,
  discord: DiscordIcon,
  close: CloseIcon,
  wallet: AccountBalanceWalletOutlinedIcon,
  hamburger: MenuIcon,
  search: SearchIcon,
  usdt: USDTIcon,
  copy: ContentCopyIcon,
  dark: DarkModeOutlinedIcon,
  light: LightModeOutlinedIcon,
  dashboard: DashboardIcon,
  transactions: TransactionsIcon,
  market: MarketIcon,
  notification: NotificationIcon,
  settings: SettingsIcon,
  support: SupportIcon,
  logout: LogoutIcon,
  south: SouthIcon,
  east: EastIcon,
  add: AddIcon,
  swap: SwapHorizIcon,
  login: LoginIcon,
  register: PersonAddIcon,
  verify: VerifiedUserIcon,
  link: LinkIcon,
  check: CheckOutlinedIcon
}

interface Props {
  name: keyof typeof ICON_MAPS
  size?: number | string
  color?: keyof typeof colors
}

const AppIcon = ({ name, size = 0, color, ...props }: Props) => {
  const IconComponent = ICON_MAPS[name]
  if (!IconComponent) {
    console.log(`Icon ${name} not found`)

    return null
  }

  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        color: color && colors[color],
        '& svg':
          (typeof size === 'number' && size > 0) || (typeof size === 'string' && String(size).length > 0)
            ? {
                width: size,
                height: size
              }
            : {}
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}

export default memo(AppIcon)
