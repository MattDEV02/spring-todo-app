import getEvent from './utils';


const getScadenze = todos => {
   let events = [];
   todos.map(todo =>
      events.push(getEvent(todo))
   );
   console.log(events);
   return events;
};


export default getScadenze;