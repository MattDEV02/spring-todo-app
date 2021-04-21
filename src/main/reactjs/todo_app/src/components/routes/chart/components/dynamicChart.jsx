import React, { useState } from 'react';
import BarChart from './components/charts/barChart';
import Menu from './components/menu';
import config, {
   colors,
   setConfig,
   isMulticolor,
   chartType,
   initialState,
   default_colors
} from '../js';
import '../css/index.css';


const DynamicChart = ({ data }) => {
   const [type, setType] = useState(initialState);
   setConfig(data);
   console.log(colors);
   return (
      <>
         <Menu
            handleSelect={setType}
         />
         {
            type === chartType.bar ?
               <BarChart
                  config={config}
               /> : type === chartType.horizontalBar ? 'horizontal' :
                  <h1>chart...</h1>
         }
      </>
   );
}


export default DynamicChart;