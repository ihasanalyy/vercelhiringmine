import React, { useState } from 'react';
import logo from '../../Assests/logo.png';
import './navbar.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const homepage = () => {
        navigate('/');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mainNav">
            <img onClick={homepage} src={logo} alt="HiringMineLogo" />
            
            
            
            <ul className={menuOpen ? "active" : ""}>
                <li><Link to="/Aboutus">About Us</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/joinnow">Join Now</Link></li>
                <li><Link to="/employee">Employee / Post Job</Link></li>
            </ul>

            <button className='leftBtns'>
            <button className="menu-toggle" onClick={toggleMenu}>☰</button>
                <DarkModeIcon />
            </button>
        </div>
    );
};

export default Navbar;
