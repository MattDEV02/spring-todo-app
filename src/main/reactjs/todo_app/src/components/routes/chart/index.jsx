import React, { useEffect, useState } from 'react';
import DynamicChart from './components/dynamicChart';
import Loading from '../../loading';
import { calculations } from '../../../js';


const TodosChart = () => {
   const [data, setData] = useState(null);
   const [err, setErr] = useState(false);
   useEffect(() => {
      (async () => {
         const res = await calculations();
         res ?
            setData(res.data)
            :
            setErr(true);
      })();
   }, []);
   return (
      <>
         <div className='row justify-content-center mt-4'>
            <div className='col-12' id='chart-container'>
               {
                  data ?
                     <DynamicChart
                        data={data}
                     />
                     :
                     <Loading
                        err={err}
                     />
               }
            </div>
         </div>
      </>
   );
};


export default TodosChart;