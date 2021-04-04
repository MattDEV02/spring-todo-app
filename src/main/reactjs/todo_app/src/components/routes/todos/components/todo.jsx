import React from 'react';
import ReactTooltip from 'react-tooltip';
import Actions from './components/actions';


const Todo = ({ todo }) => {
   const trId = todo.scadenza.isDateExpired() ? 'Expired' : 'Not-expired';
   return (
      <React.StrictMode>
         <tr id={trId} data-tip=''
            data-for={trId}>
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
         <ReactTooltip
            id={trId}
            type='info'
            className='fw-bold'>
            {`${trId} Todo`}
         </ReactTooltip>
      </React.StrictMode>
   );
};


export default Todo;