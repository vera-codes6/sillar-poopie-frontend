import { Box } from '@mui/material'

export function StatusLabel({ status }: { status: string }) {
  const mainColor = status === 'Completed' ? '#2EBE7B' : status === 'Ongoing' ? '#F6851B' : '#DA5C54'

  return (
    <Box
      component='span'
      sx={theme => ({
        ...theme.applyStyles('dark', {
          backgroundColor: `${mainColor + '29'}`,
          color: `${mainColor}`
        }),
        ...theme.applyStyles('light', {
          backgroundColor: `${mainColor}`,
          color: 'white'
        }),
        padding: '4px 6px',
        borderRadius: '50px'
      })}
    >
      {status}
    </Box>
  )
}
