import merge from 'lodash/merge'
import { enUS as enUSAdapter, zhCN as zhCNAdpater } from 'date-fns/locale'
import { enUS as enUSCore, zhCN as zhCNCore } from '@mui/material/locale'
import { enUS as enUSDate, zhCN as zhCNDate } from '@mui/x-date-pickers/locales'

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocales: enUSAdapter,
    icon: 'flagpack:gb-nir'
  },
  {
    label: 'China',
    value: 'zh',
    systemValue: merge(zhCNDate, zhCNCore),
    adapterLocales: zhCNAdpater,
    icon: 'flagpack:zh'
  }
]

export const defaultLang = allLangs[0]
