const
   title = 'Todos Inserted',
   height = 103;


const adjustCalculations = calculations => {
   let
      data = [],
      labels = [],
      colors = [];
   calculations.map(calculation => {
      labels.push(calculation.DataInserimento);
      data.push(calculation.TodoInseriti);
      colors.push(randomColor());
   });
   return {
      data,
      labels,
      colors
   };
};

const randomColor = () => {
   const
      hex = 0XFFFFFF,
      random = Math.random();
   const x = Math.round((hex * random)).toString(16);
   const y = (6 - x.length);
   const z = ('000000').substring(0, y);
   const code = new String(z + x);
   return ('#' + code);;
};

const getColors = n => {
   let
      colors = [],
      i = 0;
   for (;
      (i < n); i++)
      colors.push(randomColor());
   return colors;
}

export default adjustCalculations;

export {
   title,
   height,
   getColors
};