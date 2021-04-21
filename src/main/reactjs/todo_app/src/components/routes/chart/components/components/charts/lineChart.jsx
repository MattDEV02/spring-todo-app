import { Line } from 'react-chartjs-2';


const LineChart = ({ config }) => {
   return (
      <>
         <Line
            data={config.data}
            options={config.options}
            height={config.height}
         />
      </>
   );
};


export default LineChart;