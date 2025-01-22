import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
// import Login from './pages/login.tsx'
import Appointments from './pages/Appointments.tsx'
import Confirmation from './pages/Confirmation.tsx'
import CreateAccount from './pages/CreateAccount/CreateAccount.tsx'
import FirstTimeLogin from './pages/FirstTimeLogin.tsx'
import Health from './pages/Health.tsx'
import Home from './pages/Home.tsx'
import AccountRecovery from './pages/AccountRecovery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      {/* <Route path="login" element={<Login />}/> */}
      <Route path="home" element={<Home />}/>
      <Route path="health" element={<Health />}/>
      <Route path="first-login" element={<FirstTimeLogin />}/>
      <Route path="create-account" element={<CreateAccount />}/>
      <Route path="appointments" element={<Appointments />}/>
      <Route path="confirmation" element={<Confirmation />}/>
      <Route path="account-recovery" element={<AccountRecovery />}/>
      {/* <Route /> */}
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
