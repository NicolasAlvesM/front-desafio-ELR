import './App.css'
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./providers/auth";

function App() {
  const { signed } = useAuth();
  const navigate = useNavigate()

  if(!signed)
    navigate('/sign-in')
  
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
