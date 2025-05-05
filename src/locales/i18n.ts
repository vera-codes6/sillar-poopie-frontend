import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { localStorageGetItem } from '@/utils'
import { defaultLang } from './configLang'
import translationEn from './langs/en.json'
import translationZh from './langs/zh.json'

const lng = localStorageGetItem('i18nextLng', defaultLang.value)

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: translationEn },
      zh: { translations: translationZh }
    },
    lng,
    fallbackLng: lng,
    debug: false,
    ns: ['translations'],
    defaultNS: ['translations'],
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
