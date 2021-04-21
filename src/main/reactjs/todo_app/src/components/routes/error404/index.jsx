import col from './js';
import selectors from '../todos/js';


const Error404 = () => {
   const text = 'Component NOT FOUND (404).';
   console.error(text);
   return (
      <>
         <div className={`${selectors.row}`}>
            <div className={col}>
               <h1 className='text-light'>
                  {text}
               </h1>
            </div>
         </div>
      </>
   );
};


export default Error404;