import adjustCalculations, {
   title,
   height
} from './utils';


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
      borderWidth: 1.0,
      pointBackgroundColor: default_colors.gold,
      pointRadius: 5,
      fill: false,
   }]
};

const options = {
   responsive: true,
   title: {
      display: true,
      text: title,
   },
   scales: {
      yAxes: [{
         ticks: {
            beginAtZero: true,
         },
      }, ],
   },
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
   const Configdata = config.data;
   Configdata.labels = labels;
   Configdata.datasets[0].data = data;
   return config;
};

const chartType = { // Like an Enum
   bar: 'bar',
   horizontalBar: 'horizontal-bar',
   line: 'line',
};

const initialState = chartType.bar

const tooltipID = 'select-chart-type';


export default config;

export {
   setConfig,
   initialState,
   default_colors,
   chartType,
   tooltipID
};