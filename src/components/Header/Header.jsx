import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, logOut, setUser} = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log("user logged out");
            setUser(null);
        })
        .catch(error => console.log(error.message));
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                {
                    user && <span style={{marginLeft: '20px'}}>Welcome, {user.email} <button style={{marginLeft: "20px"}} onClick={handleLogOut} >Sign Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;