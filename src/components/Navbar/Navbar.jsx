import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { useAuth } from '../../contexts/authContext';

function Navbar() {
    const navigate = useNavigate();
    const authContext = useAuth();
    return (
        <Menu>
            <Menu.Item as={Link} to={"/"} > Ana Sayfa </Menu.Item>
            <Menu.Item onClick={() => { navigate("/posts") }}> Postlar </Menu.Item>
            {!authContext.isAuthenticated && <Menu.Item as={Link} to={"/login"}>Giriş Yap</Menu.Item>}
        </Menu>
    )
}
export default Navbar;