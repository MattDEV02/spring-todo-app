import selectors from './routes/form/js';


const Title = () => {
   return (
      <>
         <div className={`${selectors.row} text-center mt-4`}>
            <h1>
               Todo-App
            </h1>
         </div>
      </>
   );
};


export default Title;