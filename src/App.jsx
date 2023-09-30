import { Route, Routes, useSearchParams } from "react-router-dom";
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
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/rooms" element={<RoomManagement></RoomManagement>}></Route>
        <Route path="/tenants" element={<TenantManagement></TenantManagement>}></Route>
        <Route path="/payments" element={<PaymentManagement></PaymentManagement>}></Route>
      </Routes>
      {/* <Dashboard></Dashboard> */}
      {/* <RoomManagement></RoomManagement> */}
      {/* <TenantManagement></TenantManagement> */}
      {/* <PaymentManagement></PaymentManagement> */}
    </>
  )
}

export default App
