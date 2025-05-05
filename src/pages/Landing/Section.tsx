import { Box, styled } from '@mui/material'

const Section = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: '150px',
  paddingBottom: '150px',
  [theme.breakpoints.down('md')]: {
    paddingTop: '100px',
    paddingBottom: '100px'
  }
}))

export default Section
