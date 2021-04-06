import checkTodo from './utils';
import {
   sendMail,
   _delete,
   update
} from '../../../../../../js';


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
      scadenza = window.prompt('Inserisci nuova Scadenza: ', '2021-03-15 08:44:26');
   const newTodo = {
      id,
      nome,
      scadenza
   };
   if ((checkTodo(newTodo)) && (!newTodo.equals(todo))) {
      const res = await update(newTodo);
      if (res.status === 200)
         console.log(todo, newTodo);
   } else
      window.alert('Todo non Valido.');
};

const deleteTodo = async (id) => {
   const condition = window.confirm(`Confermi eminazione Todo con ID = ${id}?`);
   if (condition) {
      console.log(id);
      const res = await _delete(id);
      if (res.status === 200)
         sendMail(id);
   } else
      window.alert('Eliminazione annullata');
};


export default selectors;

export {
   infoTodo,
   updateTodo,
   deleteTodo
};