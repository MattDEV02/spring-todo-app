import {
  configureStore
} from '@reduxjs/toolkit';
import todosReducer from '../redux/todo';
import calculationsReducer from '../redux/calculations';


const store = configureStore({
  reducer: {
    todos: todosReducer,
    calculations: calculationsReducer
  }
});


export default store;