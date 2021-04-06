import React, { useState, useEffect } from 'react';
import Todo from './components/todo';
import TodoHeader from './components/todosHeader';
import FormLink from './components/formLink';
import Loading from '../../loading';
import { select } from '../../../js';
import './css/index.css';


const Todos = () => {
   const [todos, setTodos] = useState(null);
   useEffect(() => {
      (async () => {
         const todosData = await select();
         setTodos(todosData);
      })();
   }, []);
   return (
      <React.StrictMode>
         <div className='row justify-content-center mt-5'>
            <div className='col-6'>
               {
                  todos ?
                     <div className='table-responsive-sm'>
                        <table className='table table-hover text-center'>
                           <thead>
                              <TodoHeader
                                 keys={Object.keys(todos[0])}
                              />
                           </thead>
                           <tbody>
                              {
                                 todos.map(todo =>
                                    <Todo
                                       todo={todo}
                                       key={todo.id}
                                    />
                                 )
                              }
                           </tbody>
                        </table>
                     </div> :
                     <Loading />
               }
            </div>
         </div>
         <FormLink />
      </React.StrictMode>
   );
};


export default Todos;