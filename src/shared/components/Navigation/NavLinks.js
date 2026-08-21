import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
    return (
          <div>
            <ul className='nav-links'>
                <li>
                    <NavLink to="/">All User</NavLink>
                </li>
                <li>
                    <NavLink to="/ui/place">My Place</NavLink>
                </li>
                 <li>
                    <NavLink to="/new/place">Add Place</NavLink>
                </li>
                 <li>
                    <NavLink to="/auth">Auth</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavLinks;