import './css/todoHeader/index.css';


const TodoHeader = props => {
   const keys = props.keys;
   return (
      <>
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
      </>
   );
};


export default TodoHeader;