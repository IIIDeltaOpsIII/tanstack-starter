import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { langKey } from '@/components/LanguageSwitcher/LanguageSwitcher.utils'
import { LANGUAGES } from '@/constants/lang.constants'
import englishTranslations from '@/translations/en.json'
import frenchTranslations from '@/translations/fr.json'
import chineseTranslations from '@/translations/zh.json'

const defaultNameSpace = 'translation'

const resources = {
  [LANGUAGES.ENGLISH]: englishTranslations,
  [LANGUAGES.FRENCH]: frenchTranslations,
  [LANGUAGES.CHINESE]: chineseTranslations
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['cookie'],
      caches: ['cookie'],
      lookupCookie: langKey,
      cookieMinutes: 60 * 24 * 365
    },
    lng: LANGUAGES.ENGLISH,
    fallbackLng: LANGUAGES.ENGLISH,
    supportedLngs: Object.values(LANGUAGES)
  })

export { i18n as default, defaultNameSpace }
