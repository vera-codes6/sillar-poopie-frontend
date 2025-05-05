import { useTranslate } from '@/hooks'
import { Box, BoxProps } from '@mui/material'

interface Props {
  text: string
  link?: string | null
}

export default function Translations({ text, link }: Props & Partial<BoxProps>) {
  const translate = useTranslate()
  if (link == null) {
    return <>{`${translate(text)}`}</>
  }

  return (
    <Box>
      {`${translate(text)}`}
      <Box
        component='a'
        href={link}
        sx={theme => ({
          ...theme.applyStyles('light', {
            color: '#000'
          }),
          ...theme.applyStyles('dark', {
            color: '#FFD258'
          }),
          marginLeft: '5px'
        })}
      >
        READ MORE
      </Box>
    </Box>
  )
}
