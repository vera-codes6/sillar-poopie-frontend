import { Box, Button, Stack, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Translations from '../Translations'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { colors } from '@/theme/themePrimitives'

interface Props {
  index: number
  blog: { title: string; content: string }
}

export default function BlogCard({ index, blog }: Props) {
  return (
    <Stack direction='column' spacing='16px' width='346px'>
      <LazyLoadImage width='100%' src={`./assets/img/update${index + 1}.webp`} alt={`blog ${index}`} />
      <Stack direction='column' spacing='8px'>
        <Typography
          variant='body1'
          sx={{
            height: '29px',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          <Translations text={blog.title} />
        </Typography>
        <Typography
          sx={{
            height: '72px',
            textOverflow: 'ellipsis',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            color: colors.black9F,
            overflow: 'hidden'
          }}
        >
          <Translations text={blog.content} />
        </Typography>
      </Stack>
      <Box>
        <Button variant='outlined' size='small' endIcon={<KeyboardArrowRightOutlinedIcon />} sx={{ fontSize: '16px' }}>
          <Translations text='section6.readmore' />
        </Button>
      </Box>
    </Stack>
  )
}
