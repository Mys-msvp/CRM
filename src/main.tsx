import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Layout.tsx'
import Leads from './Componets/General/Pages/Leads/Leads.tsx'
import OneLead from './Componets/General/Pages/Leads/OneLead.tsx'
import Dashboard from './Componets/General/Pages/Dashboard/Dashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout children={<Dashboard/>}/>}/>
      <Route path='/Leads' element={<Layout children={<Leads/>}/>}/>
      <Route path='/Lead/:id' element={<Layout children={<OneLead/>}/>}/>
    </Routes>
    
  </BrowserRouter>
)
