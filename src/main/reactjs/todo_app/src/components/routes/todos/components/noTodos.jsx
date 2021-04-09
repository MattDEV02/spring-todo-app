import React from 'react';
import selectors from '../js';


const NoTodos = () => {
   const text = 'NO TODOS.';
   console.warn(text);
   return (
      <React.StrictMode>
         <div className={`${selectors.row}`}>
            <div className='col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 bg-warning'>
               <h1 className='text-light'>
                  {text}
               </h1>
            </div>
         </div>
      </React.StrictMode>
   );
};


export default NoTodos;