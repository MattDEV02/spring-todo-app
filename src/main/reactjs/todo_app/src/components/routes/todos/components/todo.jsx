import ReactTooltip from 'react-tooltip';
import Actions from './components/actions';
import { isExpired } from '../js';


const Todo = ({ todo }) => {
   const trId = isExpired(todo.scadenza);
   return (
      <>
         <tr
            id={trId}
            data-tip=''
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
            className='fw-bold'
         >
            {`${trId} Todo`}
         </ReactTooltip>
      </>
   );
};


export default Todo;