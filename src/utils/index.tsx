import { toast } from 'react-toastify'

export const localStorageGetItem = (key: string, defaultValue = '') => {
  return localStorage.getItem(key) || defaultValue
}

export const scrollIntoSection = (id: string | undefined) => {
  if (id) {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }
}

export const handleError = (err: unknown, defaultMessage?: string) => {
  if (err instanceof Error) {
    toast(err.message, { type: 'error' })
  } else {
    toast(defaultMessage || 'An unknown error occured', { type: 'error' })
  }
}
