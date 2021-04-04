import checkTodo from './utils';


const selectors = {
   row: 'row justify-content-center mt-5',
   btn: 'btn border border-dark mx-1 btn',
   icon: 'fas fa',
   sub: 'sub', 
   del: 'del'
};

const infoTodo = todo =>
   window.alert(
      `\nId: ${todo.id} 
      \nData creazione:  ${todo.createdAt}
      \nData aggiornamento:  ${todo.updatedAt}`
   );

const updateTodo = async (todo) => {
   const
      id = todo.id,
      nome = window.prompt('Inserisci nuovo Nome: ', todo.nome),
      scadenza = window.prompt('Inserisci nuova Scadenza: ', todo.scadenza);
   const newTodo = {
      id,
      nome,
      scadenza
   };
   if ((checkTodo(newTodo)) && (!newTodo.equals(todo))) {
      console.log(todo, newTodo);
      /* const res = await axios.put('update', newTodo, headers);
      document.body.innerHTML = res.data;*/
   } else
      window.alert('Todo non Valido.');
};

const deleteTodo = async (id) => {
   const condition = window.confirm(`Confermi eminazione Todo con ID = ${id}?`);
   if (condition) {
      console.log(id);
      /* const url = ('delete/' + id);
      const res = await axios.delete(url, headers);
      document.body.innerHTML = res.data;*/
   } else
      window.alert('Eliminazione annullata');
};


export default selectors;

export {
   infoTodo,
   updateTodo,
   deleteTodo
};