import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './components/todo';
import TodoHeader from './components/todosHeader';
import FormLink from './components/formLink';
import Loading from '../../loading';
import { select } from '../../../js';
import { selectTodos, setTodos } from '../../../redux/todo';
import './css/index.css';


const Todos = () => {
   const dispatch = useDispatch();
   const todos = useSelector(selectTodos);
   useEffect(() => {
      (async () => {
         const todosData = await select();
         dispatch(setTodos(todosData));
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