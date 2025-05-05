import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import { useKeenSlider } from 'keen-slider/react'

import Translations from '@/components/Translations'
import Section from './Section'
import BlogCard from '@/components/BlogCard'
import { blogs } from '@/constants/blog'
import { colors } from '@/theme/themePrimitives'
import 'keen-slider/keen-slider.min.css'
import AppIcon from '@/components/AppIcon'

export default function Blog() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true
  })

  return (
    <Section id='blog' sx={{ py: '150px', backgroundColor: 'background.default' }}>
      <Container maxWidth='xl'>
        <Stack direction='column' spacing='50px'>
          <Stack direction='row' spacing='10px' justifyContent='center'>
            <Typography component='h3' variant='h3'>
              <Translations text='section6.stay' />
            </Typography>
            <Typography component='h3' variant='h3' color={colors.yellowText}>
              <Translations text='section6.updated' />
            </Typography>
          </Stack>
          <Stack
            direction='row'
            width='100%'
            sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'space-between' } }}
          >
            {blogs.map((blog, index) => (
              <BlogCard key={`blog${index}`} index={index} blog={blog} />
            ))}
          </Stack>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <div ref={sliderRef} className='keen-slider'>
              {blogs.map((blog, index) => (
                <div
                  key={`blogSlide${index}`}
                  className='keen-slider__slide'
                  style={{ width: '340px', display: 'flex', justifyContent: 'center' }}
                >
                  <BlogCard index={index} blog={blog} />
                </div>
              ))}
              <IconButton
                onClick={() => instanceRef.current?.prev()}
                sx={{
                  position: 'absolute',
                  top: '105px',
                  left: '-20px',
                  transform: 'translateY(-50%)'
                }}
              >
                <AppIcon name='left' size='50px' />
              </IconButton>
              <IconButton
                onClick={() => instanceRef.current?.next()}
                sx={{
                  position: 'absolute',
                  top: '105px',
                  right: '-20px',
                  transform: 'translateY(-50%)'
                }}
              >
                <AppIcon name='right' size='50px' />
              </IconButton>
            </div>
          </Box>
        </Stack>
      </Container>
    </Section>
  )
}
