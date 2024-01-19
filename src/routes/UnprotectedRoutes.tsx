import '../App.css'
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";
import { useEffect } from 'react';

function UnprotectedRoutes() {
  const { signed } = useAuth();
  const navigate = useNavigate()

    useEffect(()=>{
        if(signed)
            navigate('/')
    },[ signed ])
  
  return (
    <>
      <Outlet />
    </>
  )
}

export default UnprotectedRoutes
