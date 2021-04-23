import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DynamicChart from './components/dynamicChart';
import Loading from '../../loading';
import { selectCalculations, setCalculations } from '../../../redux/calculations';
import { GETcalculations } from '../../../js';


const TodosChart = () => {
   const dispatch = useDispatch();
   const calculations = useSelector(selectCalculations);
   const [err, setErr] = useState(false);
   useEffect(() => {
      (async () => {
         const res = await GETcalculations();
         res ?
            dispatch(setCalculations(res.data))
            :
            setErr(true);
      })();
   }, []);
   return (
      <>
         <div className='row justify-content-center mt-4'>
            <div className='col-12' id='chart-container'>
               {
                  calculations ?
                     <DynamicChart
                        calculations={calculations}
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