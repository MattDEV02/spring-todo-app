import adjustCalculations, {
   title,
   height,
   getColors
} from './utils';


let colors = null;

const default_colors = {
   darkred: '#8B0000',
   gold: '#D4Af37',
   white: '#FFFFFF'
};


const data = {
   datasets: [{
      label: title,
      backgroundColor: default_colors.darkred,
      borderColor: default_colors.gold,
      borderWidth: 0.5,
      pointBackgroundColor: default_colors.gold,
      pointRadius: 3,
   }]
};

const options = {
   legend: {
      labels: {
         fontColor: default_colors.white,
         fontSize: 14,
      }
   },
   title: {
      display: true,
      text: title,
   }
};

const config = {
   data,
   options,
   height
};

const setConfig = calculations => {
   calculations = adjustCalculations(calculations);
   const
      labels = calculations.labels,
      data = calculations.data;
   colors = getColors(labels.length);
   const Configdata = config.data;
   Configdata.labels = labels;
   Configdata.datasets[0].data = data;
   return config;
};

const chartType = { // Like an Enum
   line: 'line',
   bar: 'bar',
   horizontalBar: 'horizontal-bar',
   radar: 'radar',
   pie: 'pie',
   doughnut: 'doughnut',
   polar: 'polar'
};

const isMulticolor = type => {
   return (
      type === 'pie' ||
      type === 'doughnut' ||
      type === 'polar'
   );
};

const initialState = chartType.bar

const tooltipID = 'select-chart-type';


export default config;

export {
   setConfig,
   isMulticolor,
   initialState,
   default_colors,
   chartType,
   tooltipID,
   colors
};