import { allLangs, defaultLang } from '@/locales/configLang'
import { localStorageGetItem } from '@/utils'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

export const useLocales = () => {
  const { i18n, t } = useTranslation()
  const langStorage = localStorageGetItem('i18nextLang')
  const currentLang = allLangs.find(lang => lang.value == langStorage) || defaultLang

  const onChangeLang = useCallback(
    (newlang: string) => {
      i18n.changeLanguage(newlang)
    },
    [i18n]
  )

  return {
    allLangs,
    t,
    currentLang,
    onChangeLang
  }
}
