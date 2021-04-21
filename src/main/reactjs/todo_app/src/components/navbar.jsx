import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './js';
import './css/index.css';


const Navbar = () => {
   return (
      <nav
         className={nav.bar}>
         <ul
            className={nav.list}>
            <li
               className={nav.item}>
               <NavLink
                  exact to='/'
                  className={nav.brand}>
                  Table
               </NavLink>
            </li>
            <li
               className={nav.item}>
               <NavLink
                  exact to='/form'
                  className={nav.brand}>
                  Form
               </NavLink>
            </li>
            <li
               className={nav.item}>
               <NavLink
                  exact to='/calendar'
                  className={nav.brand}>
                  Calendar
               </NavLink>
            </li>
            <li
               className={nav.item}>
               <NavLink
                  exact to='/chart'
                  className={nav.brand}>
                  Chart
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};


export default Navbar;