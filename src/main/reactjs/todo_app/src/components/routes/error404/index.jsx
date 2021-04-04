import React from 'react';
import TodosLink from '../form/components/todosLink';
import selectors from '../todos/components/components/js';


const Error404 = () => {
   const text = 'Component NOT FOUND (404).';
   console.error(text);
   return (
      <React.StrictMode>
         <div className={`${selectors.row}`}>
            <div className='col-6 bg-danger'>
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