import selectors from './routes/form/js';


const Loading = ({ err }) => {
   const text = err ? 'Failing to Data Fetch.' : ' The Component is Loading...';
   const _class = err ? 'danger' : 'warning';
   return (
      <>
         <div
            className={`${selectors.row} text-center`}>
            <h1
               className={'text-' + _class}>
               {text}
            </h1>
         </div>
      </>
   );
};


export default Loading;