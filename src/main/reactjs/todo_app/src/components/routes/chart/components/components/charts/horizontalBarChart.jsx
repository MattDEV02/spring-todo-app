import { Bar } from 'react-chartjs-2';


const HorizontalBarChart = ({ config }) => {
   return (
      <>
         <Bar
            data={config.data}
            options={{ indexAxis: 'y' }}
            height={config.height}
         />
      </>
   );
};


export default HorizontalBarChart;

