import React from 'react';
import selectors from '../../todos/components/components/js';
import '../../todos/components/components/css/index.css';


const Actions = () => {
   return (
      <React.StrictMode>
         <div className='col-4'>
            <button
               type='submit'
               className={`${selectors.btn}-success btn-lg`}
               id='sub'
               title='Invia Todo'>
               <i
                  className={`${selectors.icon}-play`}>
               </i>
            </button>
         </div>
         <div className='col-4'>
            <button
               type='reset'
               className={`${selectors.btn}-danger btn-lg del`}
               id='del'
               title='Reset Form'>
               <i
                  className={`${selectors.icon}-trash`}>
               </i>
            </button>
         </div>
      </React.StrictMode>
   );
};


export default Actions;