import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PrivateRoutes = () => {
    const { authUser } = useAuth()
    console.log(authUser)

    return(
        authUser ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes