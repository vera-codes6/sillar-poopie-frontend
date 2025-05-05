import LanguagePicker from '@/components/SelectLanguage'
import Translations from '@/components/Translations'
import { Box, Container, Stack, Typography } from '@mui/material'
import MenuLink from '@/components/Button/MenuLink'
import Grid from '@mui/material/Grid2'
import BrandSection from './BrandSection'
import FooterLinks from './FooterLinks'
import { colors } from '@/theme/themePrimitives'
import { foundationLinks, sitemapLinks } from '@/constants/footer'

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'background.default', pt: '100px', pb: '32px' }}>
      <Container maxWidth='xl'>
        <Grid container spacing='50px' flexDirection={{ xs: 'column', md: 'row' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <BrandSection />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <FooterLinks links={sitemapLinks} />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <FooterLinks links={foundationLinks} />
          </Grid>
        </Grid>
        <hr style={{ color: colors.footerDivider, marginTop: '32px', marginBottom: '32px' }} />
        <Stack
          justifyContent='space-between'
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          spacing={2}
          alignItems={{ md: 'center' }}
        >
          <Typography component='p' sx={{ fontSize: '16px', fontWeight: 400, textAlign: 'center' }}>
            Ⓒ Poope 2024
          </Typography>
          <Stack alignItems='center' spacing={2} direction={{ xs: 'column', md: 'row' }}>
            <Stack
              direction='row'
              justifyContent='space-between'
              spacing='16px'
              alignSelf='stretch'
              alignItems={{ md: 'center' }}
            >
              <MenuLink>
                <Translations text='footer.privacy' />
              </MenuLink>
              <MenuLink>
                <Translations text='footer.terms' />
              </MenuLink>
            </Stack>
            <Stack justifyContent='center' alignItems='center'>
              <LanguagePicker />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
