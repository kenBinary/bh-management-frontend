import { useState } from 'react'
import NavBar from './components/NavBar'
import './styles/header-styles.scss';
import Dashboard from './components/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Dashboard></Dashboard>
    </>
  )
}

export default App
