import {
   createSlice
} from '@reduxjs/toolkit';


const calculationsSlice = createSlice({
   name: 'calculations',
   initialState: {
      value: null,
   },
   reducers: {
      setCalculations: (state, action) => {
         state.value = action.payload;
      }
   }
});

const  {
   setCalculations
} = calculationsSlice.actions;

const selectCalculations = state => state.calculations.value;

const calculationsReducer = calculationsSlice.reducer;


export default calculationsReducer;

export {
   calculationsSlice,
   selectCalculations,
   setCalculations
};