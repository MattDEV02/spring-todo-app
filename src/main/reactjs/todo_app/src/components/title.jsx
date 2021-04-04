import React from 'react';
import selectors from './routes/form/js';


const Title = () => {
   return (
      <React.StrictMode>
         <div className={`${selectors.row} text-center mt-4`}>
            <h1>
               Todo-App
            </h1>
         </div>
      </React.StrictMode>
   );
};


export default Title;