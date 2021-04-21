const
   title = 'Todos Inserted',
   height = 103;


const adjustCalculations = calculations => {
   let
      data = [],
      labels = [];
   calculations.map(calculation => {
      labels.push(calculation.DataInserimento);
      data.push(calculation.TodoInseriti);
   });
   return {
      data,
      labels
   };
};


export default adjustCalculations;

export {
   title,
   height,
};