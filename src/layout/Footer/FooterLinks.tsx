import MenuLink from '@/components/Button/MenuLink'
import Translations from '@/components/Translations'
import { scrollIntoSection } from '@/utils'
import { Box, Typography } from '@mui/material'

interface FooterLink {
  title: string
  scroll?: string
  to?: string
}

interface Props {
  links: { title: string; items: FooterLink[] }
}

export default function FooterLinks({ links }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        flexDirection: 'column',
        textAlign: { xs: 'center', md: 'left' }
      }}
    >
      <Typography component='h6' variant='h6'>
        <Translations text={links.title} />
      </Typography>
      {links.items.map((item, index) => (
        <MenuLink key={`link${index}`} to={item.to} onClick={() => scrollIntoSection(item.scroll)}>
          <Translations text={item.title} />
        </MenuLink>
      ))}
    </Box>
  )
}
