import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import App from './App.tsx'
import Appointments from './pages/Appointments/Appointments.tsx'
import CreateAccount from './pages/CreateAccount/CreateAccount.tsx'
import FirstTimeLogin from './pages/FirstTimeLogin/FirstTimeLogin.tsx'
import Health from './pages/Health/Health.tsx'
import Home from './pages/Home/Home.tsx'
import AccountRecovery from './pages/AccountRecovery/AccountRecovery.tsx'
import Confirmation from './pages/Confirmation/Confirmation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="home" element={<Home />}/>
      <Route path="health" element={<Health />}/>
      <Route path="first-login" element={<FirstTimeLogin />}/>
      <Route path="create-account" element={<CreateAccount />}/>
      <Route path="appointments" element={<Appointments />}/>
      <Route path="create-account/confirmation" element={<Confirmation />}/>
      <Route path="account-recovery" element={<AccountRecovery />}/>
      <Route path="*" element={<Navigate to="/"/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
