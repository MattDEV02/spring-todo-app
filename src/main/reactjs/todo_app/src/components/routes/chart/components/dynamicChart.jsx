import React, { useState } from 'react';
import BarChart from './components/charts/barChart';
import HorizontalBarChart from './components/charts/horizontalBarChart';
import LineChart from './components/charts/lineChart';
import Menu from './components/menu';
import config, {
   setConfig,
   chartType,
   initialState
} from '../js';
import '../css/index.css';


const DynamicChart = ({ calculations }) => {
   const [type, setType] = useState(initialState);
   setConfig(calculations);
   return (
      <>
         <div>
            <Menu
               handleSelect={setType}
            />
            {
               type === chartType.bar ?
                  <BarChart
                     config={config}
                  /> :
                  type === chartType.horizontalBar ?
                     <HorizontalBarChart
                        config={config}
                     /> :
                     type === chartType.line ?
                        <LineChart
                           config={config}
                        /> :
                        <h1>CHART-ERROR</h1>
            }

         </div>
      </>
   );
}


export default DynamicChart;