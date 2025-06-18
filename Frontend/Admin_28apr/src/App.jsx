import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import AdminDashboard from './pages/AdminDashboard'
import ViewDetailspage from './components/ViewDetailspage'
import EarningDetailspage from './components/EarningDetailspage'
import ProfileThispage from './components/ProfileThispage'
import ProfitThisWeek from './components/JobApplicants'
import JobApplicants from './components/JobApplicants'
import NewHire from './components/NewHire'
import PersonalDetail from './components/PersonalDetail'
import CtcStracture from './components/CtcStracture'
import PaymentsDeductions from './components/PaymentsDeductions'
import PerquisitesInvestment from './components/PerquisitesInvestment'
import TaxComputation from './components/TaxComputation'
import RemembursementFlexi from './components/RemembursementFlexi'
import Attendence from './components/Attendence'
import Leave from './components/Leave'
import OverTimeTracking from './components/OverTimeTracking'
import NewJoinersForm from './components/NewJoinersForm'
import RegistrationMan from './components/RegistrationMan'
import SelfEvalution from './components/SelfEvalution'
import Payroll from './components/Payroll'
import Leaves from './components/Leaves'
import PerformanceReport from './components/PerformanceReport'
import EmploySelf from './components/EmploySelf'
import CTCDetailsPage from './components/CTCDetailsPage'
import PaymentDeducationAllin from './components/PaymentDeducationAllin'
import PerquestInvestmentAllinpage from './components/PerquestInvestmentAllinpage'
import TaxComputationAllinpage from './components/TaxComputationAllinpage'
import RemembursementTabPage from './components/RemembursementTabPage'
import RemembursementBillPage from './components/RemembursementBillPage'
import Flexi from './components/Flexi'
import FlexiTab from './components/FlexiTab'
import FlexiBill from './components/FlexiBill'
import AttensenceTab from './components/AttensenceTab'
import LeaveTab from './components/LeaveTab'
import OverTimeTrackingDetails from './components/OverTimeTrackingDetails'
import NewJoinersTab from './components/NewJoinersTab'
import RegistrationTab from './components/RegistrationTab'
import SelfEvalutionTab from './components/SelfEvalutionTab'
import Add from './components/Add'
import Edit from './components/Edit'
import EditPage from './components/EditPage'
import EditInformations from './components/EditInformations'
import PersonalDetailTable from './components/PersonalDetailTable'
import Reports from './components/Reports'
import Taxcomputationsheet from './components/Taxcomputationsheet'
import Investments from './components/Investments'
import PayrollCalculation from './components/PayrollCalculation'
import Individual from './components/Individual'
import ShiftManagement from './components/ShiftManagement'
import WorkingDays from './components/WorkingDays'
import OverTimeLeaveManagement from './components/OverTimeLeaveManagement'
import HaffDayPolicy from './components/HaffDayPolicy'
import LateArrival from './components/LateArrival'
import CompanyHoliday from './components/CompanyHoliday'
import AbsentTracking from './components/AbsentTracking'
import AddLeave from './components/AddLeave'
import LeaveApproval from './components/LeaveApproval'
import Role from './components/Role'
import Histtory from './components/Histtory'
import Employmaster from './components/Employmaster'
import LeaveBalance from './components/LeaveBalance'
import Actuals from './components/Actuals'
import Declaration from './components/Declaration'
import Login from './authentaction/Login'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: ([
        {
          path: "/",
          element: <AdminDashboard />,
        },
        {
          path: "/leavebalance",
          element: <LeaveBalance />
        },

        {
          path: "/actuals",
          element: <Actuals />
        },
        {
          path: "/declaration",
          element: <Declaration />
        },
        {
          path: "/viewdetailspage",
          element: <ViewDetailspage />
        }, {
          path: "/investments",
          element: <Investments />
        },
        {
          path: "/employmaster",
          element: <Employmaster />
        },
        {
          path: "/individual",
          element: <Individual />
        },
        {
          path: "/workingdays",
          element: <WorkingDays />
        },
        {
          path: "/overtimeleavemanagement",
          element: <OverTimeLeaveManagement />
        },
        {
          path: "/haffdaypolicy",
          element: <HaffDayPolicy />
        },
        {
          path: "/latearrival",
          element: <LateArrival />
        },
        {
          path: "/companyholiday",
          element: <CompanyHoliday />
        },
        {
          path: "/absenttracking",
          element: <AbsentTracking />
        },
        {
          path: "/addleave",
          element: <AddLeave />
        },
        {
          path: "/leaveapproval",
          element: <LeaveApproval />
        },
        {
          path: "/role",
          element: <Role />
        },
        {
          path: "/histtory",
          element: <Histtory />
        },
        {
          path: "/shiftmanagement",
          element: <ShiftManagement />
        },
        {
          path: "/earningdetailspage",
          element: <EarningDetailspage />
        },
        {
          path: "/profilethispage",
          element: <ProfileThispage />
        },
        {
          path: "/jobapplicants",
          element: <JobApplicants />
        },
        {
          path: "/reports",
          element: <Reports />
        },
        {
          path: "/newhire",
          element: <NewHire />
        },
        {
          path: "/personaldetail",
          element: <PersonalDetail />
        },
        {
          path: "/ctcstracture",
          element: <CtcStracture />
        },
        {
          path: "/payrollcalculation",
          element: <PayrollCalculation />
        },
        {
          path: "/paymentsdeductions",
          element: <PaymentsDeductions />
        },
        {
          path: "/perquisitesinvestment",
          element: <PerquisitesInvestment />
        },
        {
          path: "/taxcomputation",
          element: <TaxComputation />
        },
        {
          path: "/remembursementflexi",
          element: <RemembursementFlexi />
        },
        {
          path: "/attendence",
          element: <Attendence />
        },
        {
          path: "/leave",
          element: <Leave />
        },
        {
          path: "/overtimetracking",
          element: <OverTimeTracking />
        },
        {
          path: "/newjoinersform",
          element: <NewJoinersForm />
        },
        {
          path: "/registrationman",
          element: <RegistrationMan />
        },
        {
          path: "/selfEvalution",
          element: <SelfEvalution />
        },
        {
          path: "/payroll",
          element: <Payroll />
        },
        {
          path: "/leaves",
          element: <Leaves />
        },
        {
          path: "/performancereport",
          element: <PerformanceReport />
        },
        {
          path: "/employself",
          element: <EmploySelf />
        },
        {
          path: "/ctcdetailspage",
          element: <CTCDetailsPage />
        },
        {
          path: "/paymentdeducationallpage",
          element: <PaymentDeducationAllin />
        },
        {
          path: "/perquestinvestmentallinpage",
          element: <PerquestInvestmentAllinpage />
        },
        {
          path: "/taxcomputationallinpage",
          element: <TaxComputationAllinpage />
        },
        {
          path: "/remembursementtabpage",
          element: <RemembursementTabPage />
        }, {
          path: "/remembursementbillpage",
          element: <RemembursementBillPage />
        }, {
          path: "/taxcomputationsheet",
          element: <Taxcomputationsheet />
        },
        {
          path: "/flexi",
          element: <Flexi />
        },
        {
          path: "/flexitab",
          element: <FlexiTab />
        },
        {
          path: "/flexibill",
          element: <FlexiBill />
        },
        {
          path: "/attensencetab",
          element: <AttensenceTab />
        },
        {
          path: "/leavetab",
          element: <LeaveTab />
        },
        {
          path: "/overtimetrackingdetails",
          element: <OverTimeTrackingDetails />
        },
        {
          path: "/newjoinerstab",
          element: <NewJoinersTab />
        },
        {
          path: "/registrationtab",
          element: <RegistrationTab />
        },
        {
          path: "/selfevalutiontab",
          element: <SelfEvalutionTab />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/edit",
          element: <Edit />
        },
        {
          path: "/editpage",
          element: <EditPage />
        },
        {
          path: "/editinformations",
          element: <EditInformations />
        },
        {
          path: "/personaldetailtable",
          element: <PersonalDetailTable />
        }
      ])
    },
    {
      path: '/login',
      element: <Login />
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
