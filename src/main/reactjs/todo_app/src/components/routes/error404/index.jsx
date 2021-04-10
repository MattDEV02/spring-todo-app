import React from 'react';
import col from './js';
import selectors from '../todos/js';


const Error404 = () => {
   const text = 'Component NOT FOUND (404).';
   console.error(text);
   return (
      <React.StrictMode>
         <div className={`${selectors.row}`}>
            <div className={col}>
               <h1 className='text-light'>
                  {text}
               </h1>
            </div>
         </div>
      </React.StrictMode>
   );
};


export default Error404;