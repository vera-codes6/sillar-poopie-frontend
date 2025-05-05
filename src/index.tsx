import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles'

import App from './App'
import './index.css'
import './locales/i18n'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { persister, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <App />
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
)
