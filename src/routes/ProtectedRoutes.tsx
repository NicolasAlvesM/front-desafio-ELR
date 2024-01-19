import '../App.css'
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";
import { useEffect } from 'react';

function ProtectedRoutes() {
  const { signed } = useAuth();
  const navigate = useNavigate()
  
    useEffect(()=>{
        console.log(signed)
        if(!signed)
            navigate('/sign-in')
    },[ signed ])

  
  
  return (
    <>
      <Outlet />
    </>
  )
}

export default ProtectedRoutes
