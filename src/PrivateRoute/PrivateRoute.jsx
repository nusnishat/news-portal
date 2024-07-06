import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if(loading){
        <Spinner animation="border" variant="secondary" />
    }
    if(user)
    {
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;