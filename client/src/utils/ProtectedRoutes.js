import { Navigate, Outlet } from 'react-router-dom'
function ProtectedRoutes(){  
  let token  = localStorage.getItem('token')
  let auth = {'token':true}
    return (
        token ? <Outlet/> : <Navigate to='/'/>
    )
}
export default ProtectedRoutes;