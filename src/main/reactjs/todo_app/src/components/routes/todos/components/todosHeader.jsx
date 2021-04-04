import React from 'react'
import './css/todoHeader/index.css';


const TodoHeader = props => {
   const keys = props.keys;
   return (
      <React.StrictMode>
         <tr>
            <th>
               {keys[1]}
            </th>
            <th>
               {keys[2]}
            </th>
            <th>
               azioni
            </th>
         </tr>
      </React.StrictMode>
   );
};


export default TodoHeader;