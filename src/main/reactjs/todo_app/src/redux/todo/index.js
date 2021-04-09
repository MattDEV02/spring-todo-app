import {
   createSlice
} from '@reduxjs/toolkit';


const todosSlice = createSlice({
   name: 'todos',
   initialState: {
      value: null,
   },
   reducers: {
      setTodos: (state, action) => {
         state.value = action.payload;
      }
   }
});

const  {
   setTodos
} = todosSlice.actions;

const selectTodos = state => state.todos.value;

const todosReducer = todosSlice.reducer;


export default todosReducer;

export {
   todosSlice,
   selectTodos,
   setTodos
};