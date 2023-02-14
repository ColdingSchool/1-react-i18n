import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enUsTranslations from './en-US'
import ptBrTranslations from './pt-BR'

const translations = {
  'en-US': enUsTranslations,
  'pt-BR': ptBrTranslations,
}

const i18nConfig = {
  fallbackLng: 'en-US',
  resources: translations,
}

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig)

export default i18n
