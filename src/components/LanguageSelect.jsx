import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

export function LanguageSelect() {
  const { i18n } = useTranslation()
  const { language, changeLanguage } = i18n

  return (
    <FormControl>
      <InputLabel>Language</InputLabel>
      <Select label="Language" value={language} onChange={e => changeLanguage(e.target.value)}>
        <MenuItem value="pt-BR">Português</MenuItem>
        <MenuItem value="en-US">Inglês</MenuItem>
      </Select>
    </FormControl>
  )
}
