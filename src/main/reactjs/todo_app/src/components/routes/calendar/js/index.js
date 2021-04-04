import formatDate from '../../form/js';


const getEvent = todo => {
   console.log(todo.nome);
   const
      title = 'title',
      date = '2020-10-10';
   const event = {
      title,
      date
   };
   return event;
};

const getScadenze = todos => {
   console.log('Events', todos);
   return [
      {
         title: '1',
         date: '2020-10-10'
      }
   ];
};


export default getScadenze;