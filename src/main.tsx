import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import Login from './pages/login.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/* <App /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="login" element={<Login />}/>
      {/* <Route /> */}
    </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)
