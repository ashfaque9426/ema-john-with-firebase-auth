import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <div style={{fontSize: '115px', fontWeight: "700", minHeight: "90vh", display: "flex", justifyContent: "center", alignItems: "center", color: "red"}}>Loading...</div>;
    }

    if(user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace />;
};

export default PrivateRoute;