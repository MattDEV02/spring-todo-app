import React from 'react';
import selectors from './routes/form/js';


const Loading = () => {
   return (
      <React.StrictMode>
         <div className={`${selectors.row} text-center`}>
            <h1 className='text-warning'>
               The Component is Loading..
            </h1>
         </div>
      </React.StrictMode>
   );
};


export default Loading;