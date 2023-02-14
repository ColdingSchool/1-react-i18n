import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import brazilIconPng from './icons/brazil.png'
import euaIconPng from './icons/eua.png'

export function App() {
  const { i18n, t } = useTranslation()
  const { language, changeLanguage } = i18n
  const [count, setCount] = useState(0)

  return (
    <div>
      <form>
        <label htmlFor="language-select">{t('language-select:label')}</label>
        <select
          name="language-select"
          value={language}
          onChange={e => {
            changeLanguage(e.target.value)
            setCount(oldCount => oldCount + 1)
          }}
        >
          <option value="pt-BR">Português</option>
          <option value="en-US">Inglês</option>
        </select>
      </form>

      <h1>{t('title')}</h1>
      <h2>{t('home.description')}</h2>
      <h4>{t('changed_language', { count })}</h4>

      <img width={64} height={64} src={language === 'pt-BR' ? brazilIconPng : euaIconPng} />
    </div>
  )
}
