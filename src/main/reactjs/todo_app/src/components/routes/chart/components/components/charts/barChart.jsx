import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarChart = ({ config }) => {
   return (
      <>
         <Bar
            data={config.data}
            options={config.options}
            height={config.height}
         />
      </>
   );
};


export default BarChart;