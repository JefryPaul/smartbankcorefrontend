import { Routes, Route } from 'react-router-dom'
import LandingPage from './User/Pages/LandingPage'
import Deposit from './User/Pages/Deposit'
import HomePage from './User/Pages/HomePage'
import Loan from './User/Pages/Loan'
import Transactions from './User/Pages/Transactions'
import UserLogin from './User/Pages/UserLogin'
import UserRegistration from './User/Pages/UserRegistration'
import Withdrawal from './User/Pages/Withdrawal'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import Login from './Admin/Pages/Login'
import ManageLoans from './Admin/Pages/ManageLoans'
import ManageTransactions from './Admin/Pages/ManageTransactions'
import ManageUser from './Admin/Pages/ManageUser'
import Profile from './User/Pages/Profile'
import Insurance from './User/Pages/Insurance'
import ApplyInsurance from './User/Pages/ApplyInsurance'



function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'deposit'} element={<Deposit />} />
        <Route path={'home'} element={<HomePage />} />
        <Route path={'loan'} element={<Loan />} />
        <Route path={'transactions'} element={<Transactions />} />
        <Route path={'userlogin'} element={<UserLogin />} />
        <Route path={'userregistration'} element={<UserRegistration />} />
        <Route path={'withdrawal'} element={<Withdrawal />} />
        <Route path={'profile'} element={<Profile />} />

        {/* Insurance */}
        <Route path="insurance" element={<Insurance />} />
        <Route path="insurance/apply/:type" element={<ApplyInsurance />} />




        <Route path={'admindashboard'} element={<AdminDashboard />} />
        <Route path={'login'} element={<Login />} />
        <Route path={'manageloans'} element={<ManageLoans />} />
        <Route path={'managetransactions'} element={<ManageTransactions />} />
        <Route path={'manageuser'} element={<ManageUser />} />
      </Routes>
    </>
  )
}

export default App
