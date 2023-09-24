import { useState } from 'react'
import NavBar from './components/NavBar'
import './styles/header-styles.css';
import Dashboard from './components/Dashboard';
import './styles/dashboard-style.css';
import TenantManagement from './components/TenantManagement';
import './styles/tenant-management-style.css'
import PaymentManagement from './components/PaymentManagement';
import './styles/payment-management-style.css';
import RoomManagement from './components/RoomManagement';
import './styles/room-management-style.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <RoomManagement></RoomManagement>
    {/* <PaymentManagement></PaymentManagement> */}
    {/* <Dashboard></Dashboard> */}
    {/* <TenantManagement></TenantManagement> */}
    </>
  )
}

export default App
