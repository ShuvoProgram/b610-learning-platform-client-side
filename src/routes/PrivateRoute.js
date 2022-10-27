import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthenticContext } from '../context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user } = useContext(AuthenticContext);
    const location = useLocation();
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    return children;
};

export default PrivateRoute;