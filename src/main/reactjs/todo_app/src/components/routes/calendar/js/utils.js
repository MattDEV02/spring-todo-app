const getEvent = todo => {
   const
      title = todo.nome,
      start = new Date(todo.scadenza),
      end = start;
   const event = {
      title,
      start,
      end
   };
   return event;
};


export default getEvent;