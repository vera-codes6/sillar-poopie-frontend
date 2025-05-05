import { createBrowserRouter } from 'react-router-dom'
import Landing from '@/layout/Landing'
import { ROUTES } from '@/constants/routes'
import Dashboard from '@/layout/Dashboard'
import Home from '@/pages/Dashboard/Home'
import Transaction from '@/pages/Dashboard/Transaction'
import Market from '@/pages/Dashboard/Market'
import Notification from '@/pages/Dashboard/Notification'
import Setting from '@/pages/Dashboard/Setting'
import Support from '@/pages/Dashboard/Support'
import NotFound from '@/pages/NotFound'
import PrivateRoute from '@/components/PrivateRoute'

const router = createBrowserRouter([
  {
    path: ROUTES.LANDING,
    element: <Landing />
  },
  {
    path: ROUTES.DASHBOARD.PREFIX,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: ROUTES.DASHBOARD.HOME,
        element: <Home />
      },
      {
        path: ROUTES.DASHBOARD.TRANSACTION,
        element: <Transaction />
      },
      {
        path: ROUTES.DASHBOARD.MARKET,
        element: <Market />
      },
      {
        path: ROUTES.DASHBOARD.NOTIFICATION,
        element: <Notification />
      },
      {
        path: ROUTES.DASHBOARD.SETTING,
        element: <Setting />
      },
      {
        path: ROUTES.DASHBOARD.SUPPORT,
        element: <Support />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
