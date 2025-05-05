import { useTranslation } from 'react-i18next'

export const useTranslate = (moduleKey = undefined) => {
  const { t: translate } = useTranslation(moduleKey)
  
return translate
}
