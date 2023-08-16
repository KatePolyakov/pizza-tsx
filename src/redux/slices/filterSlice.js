import { createSlice } from "@reduxjs/toolkit";

//create initial State
const initialState = {
  categoryId: 0,
  sort: { name: 'popular', sortProperty: 'rating'},
};

//create slice => imported from redux toolkit
const filterSlice = createSlice({
  name: 'filters', //<- name of our slice
  initialState,
  reducers: { //<- methods 
    setCategoryId (state, action) { //<- all methods saved in action
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions; //<- export using hook and give in

export default filterSlice.reducer; //<- export reducer