import checkTodo from './utils';
import formatDate, {
   _delete,
   update,
   select
} from '../../../../../../js';


const selectors = {
   row: 'row justify-content-center mt-5',
   btn: 'btn border border-dark mx-1 btn',
   icon: 'fas fa',
   sub: 'sub',
   del: 'del'
};

const infoTodo = todo => {
   window.alert(
      `\nId: ${todo.id} 
      \nData creazione:  ${todo.createdAt}
      \nData aggiornamento:  ${todo.updatedAt}`
   );
}

const updateTodo = async (todo) => {
   const
      id = todo.id,
      nome = window.prompt('Inserisci nuovo Nome: ', todo.nome),
      scadenza = window.prompt('Inserisci nuova Scadenza: ', todo.scadenza);
   const newTodo = {
      id,
      nome,
      scadenza: formatDate(scadenza, 'YYYY-MM-DD HH:mm:ss'),
   };
   if ((checkTodo(newTodo)) && (!newTodo.equals(todo))) {
      await update(newTodo);
      console.log(todo, newTodo);
      const todosData = await select();
      return todosData;
   } else
      window.alert('Todo non Valido.');
};

const deleteTodo = id => {
   const condition = window.confirm(`Confermi eminazione Todo con ID = ${id}?`);
   if (condition) {
      console.log(id);
      _delete(id);
   } else
      window.alert('Eliminazione annullata');
   return condition;
};


export default selectors;

export {
   infoTodo,
   updateTodo,
   deleteTodo
};