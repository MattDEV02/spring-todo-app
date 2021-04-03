import React from 'react';
import selectors, {
   infoTodo, updateTodo, deleteTodo
} from './js';
import './css/index.css';


const Actions = ({ todo }) => {
   return (
      <React.StrictMode>
         <button
            className={`${selectors.btn}-primary`}
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
            onClick={() => updateTodo()}>
            <b>
               <i
                  className={`${selectors.icon}-wrench`}>
               </i>
            </b>
         </button>
         <button
            className={`${selectors.btn}-danger`}
            id='del'
            onClick={() => deleteTodo(todo.id)}>
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