import React from 'react';
import TodosLink from '../form/components/todosLink';
import selectors from '../todos/js';


const Error404 = () => {
   const text = 'Component NOT FOUND (404).';
   console.error(text);
   return (
      <React.StrictMode>
         <div className={`${selectors.row}`}>
            <div className='col-sm-12 col-md-10 col-lg-9 col-xl-7 col-xxl-5 bg-danger'>
               <h1 className='text-light'>
                  {text}
               </h1>
            </div>
         </div>
         <TodosLink />
      </React.StrictMode>
   );
};


export default Error404;