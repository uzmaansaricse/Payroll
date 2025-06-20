import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import WhyUs from './pages/WhyUs'
import Forsmallbusiness from './pages/Forsmallbusiness'
import ForEnterprices from './pages/ForEnterprices'
import ForHRteams from './pages/ForHRteams'
import PayrollProcessing from './pages/PayrollProcessing'
import Taxcomplance from './pages/Taxcomplance'
import Loginsuperadmin from './pages/Loginsuperadmin'
import LoginAdmin from './pages/LoginAdmin'
import LoginEmploy from './pages/LoginEmploy'
import Demo from './pages/Demo'
import Contactus from './pages/Contactus'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/whyus',
          element: <WhyUs />
        },
        {
          path: '/forsmallbusiness',
          element: <Forsmallbusiness />
        },
        {
          path: '/forenterprices',
          element: <ForEnterprices />
        },
        {
          path: '/forhrteams',
          element: <ForHRteams />
        },
        {
          path: '/payrollprocessing',
          element: <PayrollProcessing />
        },
        {
          path: '/taxcomplance',
          element: <Taxcomplance />
        },
        {
          path: '/loginsuperadmin',
          element: <Loginsuperadmin />
        },
        {
          path: '/loginadmin',
          element: <LoginAdmin />
        },
        {
          path: '/loginemploy',
          element: <LoginEmploy />
        },
        {
          path: '/demo',
          element: <Demo />
        },
        {
          path: "/contactus",
          element: <Contactus />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
