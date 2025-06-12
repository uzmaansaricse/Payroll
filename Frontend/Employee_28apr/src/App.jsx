import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import SaleryDetailsPage from './components/SaleryDetailsPage'
import AddLeavePage from './components/AddLeavePage'
import AttendenceDetailPage from './components/AttendenceDetailPage'
import Performance from './components/Performance'
import Information from './components/Information'
import PersonalInformation from './components/PersonalInformation'
import BankPaymentDetail from './components/BankPaymentDetail'
import JobDetails from './components/JobDetails'
import SaleryBreakDown from './components/SaleryBreakDown'
import PaySlip from './components/PaySlip'
import LicCreadit from './components/LicCreadit'
import Perks from './components/Perks'
import Investment from './components/Investment'
import TaxRegion from './components/TaxRegion'
import TanComputions from './components/TanComputions'
import AttendancePage from './components/AttendancePage'
import UpLoadDocument from './components/UpLoadDocument'
import SelfEvulation from './components/SelfEvulation'
import PesignationSubmisson from './components/PesignationSubmisson'
import SalaryHistory from './components/SaleryHistory'
import March from './components/March'
import Remembursement from './components/Remembursement'
import OtHourse from './components/OtHourse'
import ESS from './components/ESS'
import KRA from './components/KRA'
import NewJoiners from './components/NewJoiners'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: ([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/kra",
          element: <KRA />
        },
        {
          path: "/newjoiners",
          element: <NewJoiners />
        },
        {
          path: "/salerydetailspage",
          element: <SaleryDetailsPage />
        },
        {
          path: "/addleavepage",
          element: <AddLeavePage />
        }, {
          path: "/othourse",
          element: <OtHourse />
        },
        {
          path: "/attendencedetailpage",
          element: <AttendenceDetailPage />
        },
        {
          path: "/performance",
          element: <Performance />
        },
        {
          path: "/information",
          element: <Information />
        },
        {
          path: "/personalinformation",
          element: <PersonalInformation />
        },
        {
          path: "/bankpaymentdetail",
          element: <BankPaymentDetail />
        },
        {
          path: "/march",
          element: <March />
        },
        {
          path: "/jobdetails",
          element: <JobDetails />
        },
        {
          path: "/salerybreakdown",
          element: <SaleryBreakDown />
        },
        {
          path: "/payslip",
          element: <PaySlip />
        },
        {
          path: "/remembursement",
          element: <Remembursement />
        },
        {
          path: "/liccreadit",
          element: <LicCreadit />
        },
        {
          path: "/perks",
          element: <Perks />
        },
        {
          path: "/investment",
          element: <Investment />
        },
        {
          path: "/taxregion",
          element: <TaxRegion />
        },
        {
          path: "/tancomputions",
          element: <TanComputions />
        },
        {
          path: "/attendancepage",
          element: <AttendancePage />
        },
        {
          path: "/uploaddocument",
          element: <UpLoadDocument />
        }, {
          path: "/ess",
          element: <ESS />
        },
        {
          path: "/selfevulation",
          element: <SelfEvulation />
        },
        {
          path: "/pesignationsubmisson",
          element: <PesignationSubmisson />
        },
        {
          path: "/salaryhistory",
          element: <SalaryHistory />
        }

      ])
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
