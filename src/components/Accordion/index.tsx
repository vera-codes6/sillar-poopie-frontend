import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps, accordionSummaryClasses } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Translations from '../Translations'
import { Stack } from '@mui/material'

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0)',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '16px',
    '&::before': {
      display: 'none'
    }
  })
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  flexDirection: 'row',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)'
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2)
}))

interface Props {
  data: Array<any>
}

export default function CustomizedAccordions({ data }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Stack direction='column' spacing='16px'>
      {data.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          key={`acc${index}`}
          sx={theme => ({
            backgroundColor: expanded === `panel${index}` ? 'primary.light' : 'rgba(0,0,0,0)',
            border:
              expanded === `panel${index}`
                ? `2px solid ${theme.palette.primary.dark}`
                : `1px solid ${theme.palette.divider}`,
            transition: 'all 200ms ease-out'
          })}
        >
          <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
            <Typography variant='body1'>
              <Translations text={item.title} />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='span' sx={{ fontSize: 'clamp(0.875rem, 0.787rem + 0.3756vw, 1.125rem)' }}>
              <Translations text={item.context} link='#' />
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  )
}
