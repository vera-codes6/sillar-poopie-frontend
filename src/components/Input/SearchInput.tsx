import { Box, IconButton } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

interface Props {
  isSticky?: boolean
}

export default function SearchInput({ isSticky = false }: Props) {
  return (
    <Box
      sx={theme => ({
        [theme.breakpoints.up('lg')]: {
          borderRadius: '8px',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#FFF',
          color: 'text.primary',
          ...theme.applyStyles('dark', {
            background: '#191919',
            border: '1px solid #343434'
          }),
          width: '100%'
        }
      })}
    >
      <IconButton size='small' sx={{ color: { xs: isSticky ? '#FFF' : 'action.active', lg: 'action.active' } }}>
        <SearchRoundedIcon />
      </IconButton>
      <Box
        sx={theme => ({
          color: isSticky ? '#FFF' : 'text.primary',
          [theme.breakpoints.down('lg')]: {
            display: 'none'
          }
        })}
      >
        <input
          style={{
            fontSize: '16px',
            fontWeight: 400,
            width: '100%'
          }}
          placeholder='Search'
        />
      </Box>
    </Box>
  )
}
