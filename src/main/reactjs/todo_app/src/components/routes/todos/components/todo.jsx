import React from 'react';
import Actions from './components/actions';


const Todo = ({ todo }) => {
   return (
      <React.StrictMode>
         <tr>
            <td>
               {todo.nome}
            </td>
            <td>
               {todo.scadenza}
            </td>
            <td>
               <Actions
                  todo={todo}
               />
            </td>
         </tr>
      </React.StrictMode>
   );
};


export default Todo;