import React from 'react'
import { Button } from 'semantic-ui-react';
import { useAuth } from '../../contexts/authContext';

function Login() {

    const authContext = useAuth();
    return (
        <div><Button onClick={() => {
            authContext.setIsAuthenticated(true);
        }}>Giriş Yap</Button></div>
    )
}
export default Login;