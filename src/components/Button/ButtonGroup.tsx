import { Box, Button, Stack } from '@mui/material'
import Translations from '../Translations'
import { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

const btnLabels = ['section5.questions', 'section5.resources', 'section5.how', 'section5.documentation']

export default function FAQButtonGroup() {
  const [open, setOpen] = useState<boolean>(false)
  const [selId, setSelId] = useState<number>(0)

  const onClick = (index: number) => {
    setSelId(index)
    setOpen(false)
  }

  const onOpenMenu = () => {
    setOpen(!open)
  }

  return (
    <Stack direction='column' spacing='10px'>
      <Button
        color='primary'
        size='large'
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        sx={theme => ({
          [theme.breakpoints.up('md')]: {
            display: 'none'
          }
        })}
        onClick={onOpenMenu}
      >
        <Translations text={btnLabels[selId]} />
      </Button>
      <Stack
        direction='column'
        spacing='16px'
        sx={theme => ({
          [theme.breakpoints.down('md')]: {
            display: open ? 'block' : 'none'
          }
        })}
      >
        {btnLabels.map((label, index) => (
          <Box key={`ques${index}`}>
            <Button
              color={index === selId ? 'primary' : 'secondary'}
              size='large'
              sx={theme => ({
                [theme.breakpoints.down('md')]: {
                  width: '100%'
                }
              })}
              onClick={() => onClick(index)}
            >
              <Translations text={label} />
            </Button>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}
