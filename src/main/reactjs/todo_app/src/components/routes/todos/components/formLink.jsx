import React from 'react';
import { NavLink } from 'react-router-dom';
import selectors from '../components/components/js';


const FormLink = () => {
   return (
      <React.StrictMode>
         <div className={`${selectors.row}`}>
            <div className='col-1'>
               <NavLink
                  exact to='/form'>
                  <button
                     className={`${selectors.btn}-primary`}>
                     <b>
                        Form
                     </b>
                  </button>
               </NavLink>
            </div>
         </div>
      </React.StrictMode>
   );
};


export default FormLink;