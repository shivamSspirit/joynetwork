import { Navigate,useLocation } from 'react-router-dom'
import { getAuthCookie } from '../utils/authUtils';


function AuthRoutes({ children }) {
    const authToken =getAuthCookie();
    console.log('auth',authToken)
    const location = useLocation()
    return authToken ? <>{children}</> : <Navigate to={'/auth/login'} state={{ from: location }}/>
}

export default AuthRoutes
