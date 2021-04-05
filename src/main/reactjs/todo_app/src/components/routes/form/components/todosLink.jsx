import React from 'react';
import { NavLink } from 'react-router-dom';
import selectors from '../../todos/components/components/js';


const TodosLink = () => {
   return (
      <React.StrictMode>
         <div className='row justify-content-center mt-5'>
            <div className='col-1'>
               <NavLink
                  exact to='/'>
                  <button
                     className={`${selectors.btn}-primary link`}>
                     <b>
                        Todos
                     </b>
                  </button>
               </NavLink>
            </div>
         </div>
      </React.StrictMode>
   );
};


export default TodosLink;