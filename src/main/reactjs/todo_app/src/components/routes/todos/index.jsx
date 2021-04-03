import React from 'react';
import Todo from './components/todo';
import TodoHeader from './components/todoHeader';
import './css/index.css';


const Todos = ({ todos }) => {
   const keys = Object.keys(todos[0]);
   return (
      <React.StrictMode>
         <div className='row justify-content-center mt-5'>
            <div className='col-6'>
               <div className='table-responsive-sm'>
                  <table className='table table-hover text-center'>
                     <thead>
                        <TodoHeader
                           keys={keys}
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
               </div>
            </div>
         </div>
      </React.StrictMode>
   );
};


export default Todos;