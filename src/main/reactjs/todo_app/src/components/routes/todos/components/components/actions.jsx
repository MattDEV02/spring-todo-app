import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, setTodos } from '../../../../../redux/todo';
import selectors from '../../js';
import {
   infoTodo, updateTodo, deleteTodo
} from './js';
import './css/index.css';


const Actions = ({ todo }) => {
   const dispatch = useDispatch();
   const todos = useSelector(selectTodos);
   return (
      <React.StrictMode>
         <button
            className={`${selectors.btn}-info`}
            id='inf'
            onClick={() => infoTodo(todo)}>
            <b>
               <i
                  className={`${selectors.icon}-circle`}>
               </i>
            </b>
         </button>
         <button
            className={`${selectors.btn}-warning`}
            id='mod'
            onClick={
               async () => {
                  const todosData = await updateTodo(todo);
                  if (todosData)
                     dispatch(setTodos(todosData));
               }
            }>
            <b>
               <i
                  className={`${selectors.icon}-wrench`}>
               </i>
            </b>
         </button>
         <button
            className={`${selectors.btn}-danger`}
            id={selectors.del}
            onClick={() => {
               if (deleteTodo(todo.id)) {
                  const todosData = todos.filter(todoData =>
                     (todo.id !== todoData.id)
                  );
                  dispatch(setTodos(todosData));
               }
            }}>
            <b>
               <i
                  className={`${selectors.icon}-trash`}>
               </i>
            </b>
         </button>
      </React.StrictMode>
   );
};


export default Actions;