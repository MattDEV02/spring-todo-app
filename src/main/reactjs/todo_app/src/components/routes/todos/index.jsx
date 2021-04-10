import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './components/todo';
import TodoHeader from './components/todosHeader';
import Loading from '../../loading';
import NoTodos from './components/noTodos';
import selectors, { checkTodos } from './js';
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
         <>
            <div className={selectors.row}>
               <div className={selectors.col}>
                  {
                     todos ?
                        <div className='table-responsive-sm'>
                           {
                              checkTodos(todos) ?
                                 <table className={selectors.table}>
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
                                 </table> :
                                 <NoTodos />
                           }
                        </div> :
                        <Loading />
                  }
               </div>
            </div>
         </>
      </React.StrictMode>
   );
};


export default Todos;