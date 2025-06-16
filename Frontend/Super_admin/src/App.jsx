import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Layout from './pages/Layout';
import SuperAdminDas from './pages/SuperAdminDas';
import RegisterCompany from './pages/RegisterCompany';
import FormManager from './pages/FormManager';
import ApprovalConfig from './pages/ApprovalConfig';
import ApprovalForm from './pages/ApprovalForm';
import CompanyManagement from './pages/CompanyManagement';
import AdminManagement from './pages/AdminManagement';
import EmployeeManagement from './pages/EmployeeManagement';
import CompanyData from './pages/CompanyData';
import CompanyList from './pages/CompanyList';
import CompanyViewModel from './pages/CompanyViewModel';
import CompanyAdmins from './pages/CompanyAdmins';
import Notifications from './pages/Notifications';
import NotificationDetails from './pages/NotificationDetails'; // ✅ Added this

import AuditLogs from './pages/AuditLogs';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

// Components
import CompanyDetails from './component/CompanyDetails';
import AdminDashboard from './companypages/AdminDashboard';
import LeaveBalance from './companycom/LeaveBalance';
import Actuals from './companycom/Actuals';
import Declaration from './companycom/Declaration';
import ViewDetailspage from './companycom/ViewDetailspage';
import Investments from './companycom/Investments';
import EmployeeReport from './companycom/Employmaster';
import Individual from './companycom/Individual';
import AdminPanel from './companycom/WorkingDays';
import AbsenceTracking from './companycom/OverTimeLeaveManagement';
import HalfDayPolicy from './companycom/HaffDayPolicy';
import LateArrivalPolicy from './companycom/LateArrival';
import CompanyHolidays from './companycom/CompanyHoliday';
import LeaveAssignment from './companycom/AbsentTracking';
import Leave from './companycom/AddLeave';
import LeaveApproval from './companycom/LeaveApproval';
import OTSetup from './companycom/Role';
import Histtory from './companycom/Histtory';
import App1 from './companycom/ShiftManagement';
import EarningDetailspage from './companycom/EarningDetailspage';
import ProfileThispage from './companycom/ProfileThispage';
import JobApplicants from './companycom/JobApplicants';
import Reports1 from './companycom/Reports';
import AddManager from './companycom/AddExpenses';
import PersonalDetail from './companycom/PersonalDetail';
import CTCStructureAdminPanel from './companycom/CtcStracture';
import PayrollCalculation from './companycom/PayrollCalculation';
import PaymentDeductionManagement from './companycom/PaymentsDeductions';
import TaxRegimePanel from './companycom/TaxComputation';
import ReimbursementTab from './companycom/RemembursementFlexi';
import Attendance from './companycom/Attendence';
import Leave1 from './companycom/Leave';
import LeaveApproval1 from './companycom/LeaveApproval';
import OTSetup1 from './companycom/Role';
import OvertimeTracking from './companycom/OverTimeTracking';
import NewJoinerForm from './companycom/NewJoinersForm';
import ExitFormalities from './companycom/RegistrationMan';
import PerformanceManagement from './companycom/SelfEvalution';
import Payroll from './companycom/Payroll';
import PolicyManager from './companycom/Leaves';
import PerformanceReport from './companycom/PerformanceReport';
import EmploySelf from './companycom/EmploySelf';
import CTCDetailsPage from './companycom/CTCDetailsPage';
import PaymentDeducationAllin from './companycom/PaymentDeducationAllin';
import ShiftAssignFactory from './companycom/ShiftAssign';
import PerquestInvestmentAllinpage from './companycom/PerquestInvestmentAllinpage';
import AttendanceAssign from './companycom/TaxComputationAllinpage';
import RemembursementTabPage from './companycom/RemembursementTabPage';
import RemembursementBillPage from './companycom/RemembursementBillPage';
import TaxComputation from './companycom/Taxcomputationsheet';
import FlexiTabAdmin from './companycom/Flexi';
import ResignationAssignment from './companycom/FlexiTab';
import FlexiBill from './companycom/FlexiBill';
import AttensenceTab from './companycom/AttensenceTab';
import OverTimeTrackingDetails from './companycom/OverTimeTrackingDetails';
import RegistrationTab from './companycom/RegistrationTab';
import SelfEvalutionTab from './companycom/SelfEvalutionTab';
import Add from './companycom/Add';
import Edit from './companycom/Edit';
import EditPage from './companycom/EditPage';
import EditInformations from './companycom/EditInformations';
import PersonalDetailTable from './companycom/PersonalDetailTable';
import Layout1 from './companypages/Layout1';
import Layout2 from './factorypages/Layout';
import AdminDashboard1 from './factorypages/AdminDashboard';
import ShiftAssignFactory1 from './factorycom/One';
import FactoryManagement from './factorycom/Two';
import DepartmentManagement from './factorycom/Three';
import RolePermissionsManager from './factorycom/Four';
import RolePermissionsManager1 from './factorycom/Five';
import Eight from './factorycom/Eight';
import Nine from './factorycom/Nine';
import LeaveAssignment1 from './factorycom/Ten';
import LeaveBalance1 from './factorycom/LeaveBalance';
import Actuals1 from './factorycom/Actuals';
import Declaration1 from './factorycom/Declaration';
import ViewDetailspage1 from './factorycom/ViewDetailspage';
import Investments1 from './factorycom/Investments';
import EmployeeReport1 from './factorycom/Employmaster';
import Individual1 from './factorycom/Individual';
import BulkUpdateForm1 from './factorycom/WorkingDays';
import AbsenceTracking1 from './factorycom/OverTimeLeaveManagement';
import HalfDayPolicyFactory1 from './factorycom/HaffDayPolicy';
import LateArrivalPolicyFactory from './factorycom/LateArrival';
import FactoryHolidaySetup from './factorycom/CompanyHoliday';
import AbsentTracking from './factorycom/AbsentTracking';
import Leave2 from './factorycom/AddLeave';
import LeaveApproval2 from './factorycom/LeaveApproval';
import SuperAdminOtPage from './factorycom/Role';
import Histtory1 from './factorycom/Histtory';
import ShiftManagement1 from './factorycom/ShiftManagement';
import EarningDetailspage1 from './factorycom/EarningDetailspage';
import ProfileThispage1 from './factorycom/ProfileThispage';
import JobApplicants1 from './factorycom/JobApplicants';
import Reports2 from './factorycom/Reports';
import NewHire2 from './factorycom/NewHire';
import PersonalDetail2 from './factorycom/PersonalDetail';
import CTCStructureAdminPanel2 from './factorycom/CtcStracture';
import PayrollCalculation2 from './factorycom/PayrollCalculation';
import PaymentDeductionManagement2 from './factorycom/PaymentsDeductions';
import AdminPanel2 from './factorycom/PerquisitesInvestment';
import TaxRegimePanel2 from './factorycom/TaxComputation';
import ReimbursementTab2 from './factorycom/RemembursementFlexi';
import Attendance2 from './factorycom/Attendence';
import OvertimeTracking2 from './factorycom/OverTimeTracking';
import NewJoinerForm2 from './factorycom/NewJoinersForm';
import ExitFormalities2 from './factorycom/RegistrationMan';
import PerformanceManagement2 from './factorycom/SelfEvalution';
import Payroll2 from './factorycom/Payroll';
import FactoryPolicyManager2 from './factorycom/Leaves';
import PerformanceReport2 from './factorycom/PerformanceReport';
import EmploySelf2 from './factorycom/EmploySelf';
import CTCDetailsPage2 from './factorycom/CTCDetailsPage';
import PaymentDeducationAllin2 from './factorycom/PaymentDeducationAllin';
import PerquestInvestmentAllinpage2 from './factorycom/PerquestInvestmentAllinpage';
import TaxComputationAllinpage2 from './factorycom/TaxComputationAllinpage';
import ResignationAssignment2 from './factorycom/RemembursementTabPage';
import RemembursementBillPage2 from './factorycom/RemembursementBillPage';
import TaxComputation2 from './factorycom/Taxcomputationsheet';
import FlexiTabAdmin2 from './factorycom/Flexi';
import FlexiTab2 from './factorycom/FlexiTab';
import FlexiBill2 from './factorycom/FlexiBill';
import AttensenceTab2 from './factorycom/AttensenceTab';
import PolicyManager2 from './factorycom/LeaveTab';
import OverTimeTrackingDetails2 from './factorycom/OverTimeTrackingDetails';
import FactoryAttendanceAssign2 from './factorycom/RegistrationTab';
import SelfEvalutionTab2 from './factorycom/SelfEvalutionTab';
import Add2 from './factorycom/Add';
import Edit2 from './factorycom/Edit';
import EditPage2 from './factorycom/EditPage';
import EditInformations2 from './factorycom/EditInformations';
import PersonalDetailTable2 from './factorycom/PersonalDetailTable';
import RolePermissionsManager2 from './factorycom/Six';
import RolePermissionsManager3 from './factorycom/Seven';
import Aone from './companycom/Aone';
import Atwo from './companycom/Atwo';
import Athree from './companycom/Athree';
import Afour from './companycom/Afour';
import Afive from './companycom/Afive';
import Asix from './companycom/Asix';
import Aseven from './companycom/Aseven';
import Aeight from './companycom/Aeight';
import Anine from './companycom/Anine';
import Aten from './companycom/Aten';
import Bone from './factorycom/Bone';
import Btwo from './factorycom/Btwo';
import Bthree from './factorycom/Bthree';
import Bfour from './factorycom/Bfour';
import Bfive from './factorycom/Bfive';
import Bsix from './factorycom/Bsix';
import Beight from './factorycom/Beight';
import Bseven from './factorycom/Bseven';
import Bnine from './factorycom/Bnine';
import Bten from './factorycom/Bten';
import NewPages from './factorycom/NewPages';
import SubSuperAdminList from './pages/SubSuperAdmin';
import SubSuperAdminLogin from './pages/LoginasSubSuperAdmin';

const NotFound = () => (
  <h1 className="text-center mt-10 text-red-600 text-xl">404 - Page Not Found</h1>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <SuperAdminDas /> },
      { path: "/superadmin", element: <SuperAdminDas /> },
      { path: "/registercompany", element: <RegisterCompany /> },
      { path: "/registercompanylist", element: <CompanyList /> },
      { path: "/companyview/:companyId", element: <CompanyViewModel /> },
      { path: "/form-manager", element: <FormManager /> },
      { path: "/approvalconfig", element: <ApprovalConfig /> },
      { path: "/approvalconfig/:companyId", element: <ApprovalForm /> },
      { path: "/companymanagement", element: <CompanyManagement /> },
      { path: "/adminmanagement", element: <AdminManagement /> },
      { path: "/employeemanagement", element: <EmployeeManagement /> },
      { path: "/companydata", element: <CompanyData /> },
      { path: "/companydetails", element: <CompanyDetails /> },
      { path: "/superadmin/companies/:id/admins", element: <CompanyAdmins /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/notifications/:id", element: <NotificationDetails /> },
      { path: "/auditlogs", element: <AuditLogs /> },
      { path: "/reports", element: <Reports /> },
      { path: "/settings", element: <Settings /> },
       { path: "/sub-super-admin", element: <SubSuperAdminList /> },

    ],
  },

  //Company page
  {
    path: "/admindashboard",
    element: <Layout1 />,
    children: [
      {
        index: true,
        element: <AdminDashboard />
      },
      {
        path: "/admindashboard/leavebalance",
        element: <LeaveBalance />
      },
      //// New File Start
      {
        path: "/admindashboard/aone",
        element: <Aone />
      },
      {
        path: "/admindashboard/atwo",
        element: <Atwo />
      },
      {
        path: "/admindashboard/athree",
        element: <Athree />
      },
      {
        path: "/admindashboard/afour",
        element: <Afour />
      },
      {
        path: "/admindashboard/afive",
        element: <Afive />
      },
      {
        path: "/admindashboard/asix",
        element: <Asix />
      },
      {
        path: "/admindashboard/aseven",
        element: <Aseven />
      },
      {
        path: "/admindashboard/aeight",
        element: <Aeight />
      },
      {
        path: "/admindashboard/anine",
        element: <Anine />
      },
      {
        path: "/admindashboard/aten",
        element: <Aten />
      },
      //// New File end
      {
        path: "/admindashboard/actuals",
        element: <Actuals />
      },
      {
        path: "/admindashboard/declaration",
        element: <Declaration />
      },
      {
        path: "/admindashboard/viewdetailspage",
        element: <ViewDetailspage />
      },
      {
        path: "/admindashboard/investments",
        element: <Investments />
      },
      {
        path: "/admindashboard/employmaster",
        element: <EmployeeReport />
      },
      {
        path: "/admindashboard/individual",
        element: <Individual />
      },
      {
        path: "/admindashboard/workingdays",
        element: <AdminPanel />
      },
      {
        path: "/admindashboard/overtimeleavemanagement",
        element: <AbsenceTracking />
      },
      {
        path: "/admindashboard/haffdaypolicy",
        element: <HalfDayPolicy />
      },
      {
        path: "/admindashboard/latearrival",
        element: <LateArrivalPolicy />
      },
      {
        path: "/admindashboard/companyholiday",
        element: <CompanyHolidays />
      },
      {
        path: "/admindashboard/absenttracking",
        element: <LeaveAssignment />
      },
      {
        path: "/admindashboard/addleave",
        element: <Leave1 />
      },
      {
        path: "/admindashboard/leaveapproval",
        element: <LeaveApproval1 />
      },
      {
        path: "/admindashboard/role",
        element: <OTSetup1 />
      },
      {
        path: "/admindashboard/histtory",
        element: <Histtory />
      },
      {
        path: "/admindashboard/shiftmanagement",
        element: <App1 />
      },
      {
        path: "/admindashboard/earningdetailspage",
        element: <EarningDetailspage />
      },
      {
        path: "/admindashboard/profilethispage",
        element: <ProfileThispage />
      },
      {
        path: "/admindashboard/jobapplicants",
        element: <JobApplicants />
      },
      {
        path: "/admindashboard/reports",
        element: <Reports1 />
      },
      {
        path: "/admindashboard/newhire",
        element: <AddManager />
      },
      {
        path: "/admindashboard/personaldetail",
        element: <PersonalDetail />
      },
      {
        path: "/admindashboard/ctcstracture",
        element: <CTCStructureAdminPanel />
      },
      {
        path: "/admindashboard/payrollcalculation",
        element: <PayrollCalculation />
      },
      {
        path: "/admindashboard/paymentsdeductions",
        element: <PaymentDeductionManagement />
      },
      {
        path: "/admindashboard/perquisitesinvestment",
        element: <AdminPanel />
      },
      {
        path: "/admindashboard/taxcomputation",
        element: <TaxRegimePanel />
      },
      {
        path: "/admindashboard/remembursementflexi",
        element: <ReimbursementTab />
      },
      {
        path: "/admindashboard/attendence",
        element: <Attendance />
      },
      {
        path: "/admindashboard/leave",
        element: <Leave />
      },
      {
        path: "/admindashboard/overtimetracking",
        element: <OvertimeTracking />
      },
      {
        path: "/admindashboard/newjoinersform",
        element: <NewJoinerForm />
      },
      {
        path: "/admindashboard/registrationman",
        element: <ExitFormalities />
      },
      {
        path: "/admindashboard/selfEvalution",
        element: <PerformanceManagement />
      },
      {
        path: "/admindashboard/payroll",
        element: <Payroll />
      },
      {
        path: "/admindashboard/leaves",
        element: <PolicyManager />
      },
      {
        path: "/admindashboard/performancereport",
        element: <PerformanceReport />
      },
      {
        path: "/admindashboard/employself",
        element: <EmploySelf />
      },
      {
        path: "/admindashboard/ctcdetailspage",
        element: <CTCDetailsPage />
      },
      {
        path: "/admindashboard/paymentdeducationallpage",
        element: <PaymentDeducationAllin />
      },
      {
        path: "/admindashboard/shiftassign",
        element: <ShiftAssignFactory />
      },
      {
        path: "/admindashboard/perquestinvestmentallinpage",
        element: <PerquestInvestmentAllinpage />
      },
      {
        path: "/admindashboard/taxcomputationallinpage",
        element: <AttendanceAssign />
      },
      {
        path: "/admindashboard/remembursementtabpage",
        element: <RemembursementTabPage />
      },
      {
        path: "/admindashboard/remembursementbillpage",
        element: <RemembursementBillPage />
      },
      {
        path: "/admindashboard/taxcomputationsheet",
        element: <TaxComputation />
      },
      {
        path: "/admindashboard/flexi",
        element: <FlexiTabAdmin />
      },
      {
        path: "/admindashboard/flexitab",
        element: <ResignationAssignment />
      },
      {
        path: "/admindashboard/flexibill",
        element: <FlexiBill />
      },
      {
        path: "/admindashboard/attensencetab",
        element: <AttensenceTab />
      },
      {
        path: "/admindashboard/leavetab",
        element: <PolicyManager />
      },
      {
        path: "/admindashboard/overtimetrackingdetails",
        element: <OverTimeTrackingDetails />
      },
      {
        path: "/admindashboard/newjoinerstab",
        element: <PolicyManager />
      },
      {
        path: "/admindashboard/registrationtab",
        element: <RegistrationTab />
      },
      {
        path: "/admindashboard/selfevalutiontab",
        element: <SelfEvalutionTab />
      },
      {
        path: "/admindashboard/add",
        element: <Add />
      },
      {
        path: "/admindashboard/edit",
        element: <Edit />
      },
      {
        path: "/admindashboard/editpage",
        element: <EditPage />
      },
      {
        path: "/admindashboard/editinformations",
        element: <EditInformations />
      },
      {
        path: "/admindashboard/personaldetailtable",
        element: <PersonalDetailTable />
      }
    ]
  }
  ,//factroy page
  {
    path: "/factory",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: <AdminDashboard1 />,
      },


      //// New File Start
      {
        path: "/factory/bone",
        element: <Bone />
      },
      {
        path: "/factory/btwo",
        element: <Btwo />
      },
      {
        path: "/factory/bthree",
        element: <Bthree />
      },
      {
        path: "/factory/bfour",
        element: <Bfour />
      },
      {
        path: "/factory/bfive",
        element: <Bfive />
      },
      {
        path: "/factory/bsix",
        element: <Bsix />
      },
      {
        path: "/factory/bseven",
        element: <Bseven />
      },
      {
        path: "/factory/beight",
        element: <Beight />
      },
      {
        path: "/factory/bnine",
        element: <Bnine />
      },
      {
        path: "/factory/bten",
        element: <Bten />
      },
      //// New File end
      {
        path: "/factory/one",
        element: <ShiftAssignFactory1 />
      },
      {
        path: "/factory/two",
        element: <FactoryManagement />
      },
      {
        path: "/factory/three",
        element: <DepartmentManagement />
      },
      {
        path: "/factory/four",
        element: <RolePermissionsManager />
      },
      {
        path: "/factory/five",
        element: <RolePermissionsManager1 />
      },
      {
        path: "/factory/Six",
        element: <RolePermissionsManager2 />
      },
      {
        path: "/factory/Seven",
        element: <RolePermissionsManager3 />
      },
      {
        path: "/factory/eight",
        element: <Eight />
      },
      {
        path: "/factory/nine",
        element: <Nine />
      },
      {
        path: "/factory/ten",
        element: <LeaveAssignment1 />
      },
      {
        path: "/factory/leavebalance",
        element: <LeaveBalance1 />
      },
      {
        path: "/factory/actuals",
        element: <Actuals1 />
      },
      {
        path: "/factory/declaration",
        element: <Declaration1 />
      },
      {
        path: "/factory/viewdetailspage",
        element: <ViewDetailspage1 />
      },
      {
        path: "/factory/investments",
        element: <Investments1 />
      },
      {
        path: "/factory/employmaster",
        element: <EmployeeReport1 />
      },
      {
        path: "/factory/individual",
        element: <Individual1 />
      },
      {
        path: "/factory/workingdays",
        element: <BulkUpdateForm1 />
      },
      {
        path: "/factory/overtimeleavemanagement",
        element: <AbsenceTracking1 />
      },
      {
        path: "/factory/haffdaypolicy",
        element: <HalfDayPolicyFactory1 />
      },
      {
        path: "/factory/latearrival",
        element: <LateArrivalPolicyFactory />
      },
      {
        path: "/factory/companyholiday",
        element: <FactoryHolidaySetup />
      },
      {
        path: "/factory/absenttracking",
        element: <AbsentTracking />
      },
      {
        path: "/factory/addleave",
        element: <Leave2 />
      },
      {
        path: "/factory/leaveapproval",
        element: <LeaveApproval2 />
      },
      {
        path: "/factory/role",
        element: <SuperAdminOtPage />
      },
      {
        path: "/factory/histtory",
        element: <Histtory1 />
      },
      {
        path: "/factory/shiftmanagement",
        element: <ShiftManagement1 />
      },
      {
        path: "/factory/earningdetailspage",
        element: <EarningDetailspage1 />
      },
      {
        path: "/factory/profilethispage",
        element: <ProfileThispage1 />
      },
      {
        path: "/factory/jobapplicants",
        element: <JobApplicants1 />
      },
      {
        path: "/factory/reports",
        element: <Reports2 />
      },
      {
        path: "/factory/newhire",
        element: <NewHire2 />
      },
      {
        path: "/factory/personaldetail",
        element: <PersonalDetail2 />
      },
      {
        path: "/factory/ctcstracture",
        element: <CTCStructureAdminPanel2 />
      },
      {
        path: "/factory/payrollcalculation",
        element: <PayrollCalculation2 />
      },
      {
        path: "/factory/paymentsdeductions",
        element: <PaymentDeductionManagement2 />
      },
      {
        path: "/factory/perquisitesinvestment",
        element: <AdminPanel2 />
      },
      {
        path: "/factory/taxcomputation",
        element: <TaxRegimePanel2 />
      },
      {
        path: "/factory/remembursementflexi",
        element: <ReimbursementTab2 />
      },
      {
        path: "/factory/attendence",
        element: <Attendance2 />
      },
      {
        path: "/factory/overtimetracking",
        element: <OvertimeTracking2 />
      },
      {
        path: "/factory/newjoinersform",
        element: <NewJoinerForm2 />
      },
      {
        path: "/factory/registrationman",
        element: <ExitFormalities2 />
      },
      {
        path: "/factory/selfevalution",
        element: <PerformanceManagement2 />
      },
      {
        path: "/factory/payroll",
        element: <Payroll2 />
      },
      {
        path: "/factory/leaves",
        element: <FactoryPolicyManager2 />
      },
      {
        path: "/factory/performancereport",
        element: <PerformanceReport2 />
      },
      {
        path: "/factory/employself",
        element: <EmploySelf2 />
      },
      {
        path: "/factory/ctcdetailspage",
        element: <CTCDetailsPage2 />
      },
      {
        path: "/factory/paymentdeducationallpage",
        element: <PaymentDeducationAllin2 />
      },
      {
        path: "/factory/perquestinvestmentallinpage",
        element: <PerquestInvestmentAllinpage2 />
      },
      {
        path: "/factory/taxcomputationallinpage",
        element: <TaxComputationAllinpage2 />
      },
      {
        path: "/factory/remembursementtabpage",
        element: <ResignationAssignment2 />
      },
      {
        path: "/factory/remembursementbillpage",
        element: <RemembursementBillPage2 />
      },
      {
        path: "/factory/taxcomputationsheet",
        element: <TaxComputation2 />
      },
      {
        path: "/factory/flexi",
        element: <FlexiTabAdmin2 />
      },
      {
        path: "/factory/flexitab",
        element: <FlexiTab2 />
      },
      {
        path: "/factory/flexibill",
        element: <FlexiBill2 />
      },
      {
        path: "/factory/attensencetab",
        element: <AttensenceTab2 />
      },
      {
        path: "/factory/leavetab",
        element: <PolicyManager2 />
      },
      {
        path: "/factory/overtimetrackingdetails",
        element: <OverTimeTrackingDetails2 />
      },
      {
        path: "/factory/newjoinerstab",
        element: <NewJoinerForm2 />
      },
      {
        path: "/factory/registrationtab",
        element: <FactoryAttendanceAssign2 />
      },
      {
        path: "/factory/selfevalutiontab",
        element: <SelfEvalutionTab2 />
      },
      {
        path: "/factory/add",
        element: <Add2 />
      },
      {
        path: "/factory/newpages",
        element: <NewPages />
      },
      {
        path: "/factory/edit",
        element: <Edit2 />
      },
      {
        path: "/factory/editpage",
        element: <EditPage2 />
      },
      {
        path: "/factory/editinformations",
        element: <EditInformations2 />
      },
      {
        path: "/factory/personaldetailtable",
        element: <PersonalDetailTable2 />
      }
    ]
  },

  {
    path: "/login-as-subsuperadmin",
    element: <SubSuperAdminLogin />
  }



]
);


function App() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');
    console.log(token);
    if (token) {
      localStorage.setItem('superAdminToken', token);
      
      console.log('✅ Token stored from URL:', token);
    }
  }, []);
  return <RouterProvider router={router} />;
}



export default App;
