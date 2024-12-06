import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Layout.tsx'
import Leads from './Componets/General/Pages/Leads/Leads.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout children={<App></App>}/>}/>
      <Route path='/Leads' element={<Layout children={<Leads/>}/>}/>
    </Routes>
    
  </BrowserRouter>,
)
