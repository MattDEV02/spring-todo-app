import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../redux/todo';


const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});


export default store;