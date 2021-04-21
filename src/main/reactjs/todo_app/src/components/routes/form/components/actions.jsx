import ReactTooltip from 'react-tooltip';
import selectors from '../../todos/js';
import '../../todos/components/components/css/index.css';


const Actions = () => {
   const tooltipClass = 'fw-bold';
   return (
      <>
         <div className='col-4'>
            <button
               type='submit'
               className={`${selectors.btn}-success btn-lg`}
               id={selectors.sub}
               data-tip=''
               data-for={selectors.sub}>
               <i
                  className={`${selectors.icon}-play`}>
               </i>
            </button>
            <ReactTooltip
               id={selectors.sub}
               type='success'
               className={tooltipClass}>
               Send Todo
            </ReactTooltip>
         </div>
         <div className='col-4'>
            <button
               type='reset'
               className={`${selectors.btn}-danger btn-lg del`}
               id={selectors.del}
               data-tip=''
               data-for={selectors.del}>
               <i
                  className={`${selectors.icon}-sync-alt`}>
               </i>
            </button>
            <ReactTooltip
               id={selectors.del}
               type='error'
               className={tooltipClass}>
               Reset Form
            </ReactTooltip>
         </div>
      </>
   );
};


export default Actions;