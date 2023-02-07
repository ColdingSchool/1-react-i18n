import { Typography, Stack, Divider } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { LanguageSelect } from './components/LanguageSelect'
import brazilIconPng from './icons/brazil.png'
import euaIconPng from './icons/eua.png'

export function App() {
  const { i18n, t } = useTranslation()
  const { language } = i18n

  return (
    <Stack>
      <LanguageSelect />

      <Divider sx={{ my: 5 }}>
        <img src={language === 'pt-BR' ? brazilIconPng : euaIconPng} />
      </Divider>

      <Typography variant="h3">{t('title')}</Typography>
      <Typography variant="subtitle1">{t('home.description')}</Typography>
    </Stack>
  )
}
