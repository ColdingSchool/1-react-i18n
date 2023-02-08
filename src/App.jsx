import { useTranslation } from 'react-i18next'

import brazilIconPng from './icons/brazil.png'
import euaIconPng from './icons/eua.png'

export function App() {
  const { i18n, t } = useTranslation()
  const { language, changeLanguage } = i18n

  return (
    <div>
      <form>
        <label htmlFor="language-select">Pick a Language</label>
        <select name="language-select" value={language} onChange={e => changeLanguage(e.target.value)}>
          <option value="pt-BR">Português</option>
          <option value="en-US">Inglês</option>
        </select>
      </form>

      <h1>{t('title')}</h1>
      <h2>{t('home.description')}</h2>

      <img width={64} height={64} src={language === 'pt-BR' ? brazilIconPng : euaIconPng} />
    </div>
  )
}
