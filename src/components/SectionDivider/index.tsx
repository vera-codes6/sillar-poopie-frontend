import { Box } from '@mui/material'
import React from 'react'

const SectionDivider: React.FC = () => {
  return (
    <Box
      sx={theme => ({
        backgroundImage: `linear-gradient(rgba(0,0,0,0), ${theme.palette.warning.dark}, rgba(0,0,0,0)))`,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '120px',
        transform: 'translateY(50%)'
      })}
    ></Box>
  )
}

export default SectionDivider
