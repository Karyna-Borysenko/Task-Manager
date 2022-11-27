//-----------------------------Redux Toolkit / createSlice - вместо файлов reducer и actions -----------------------------
import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

//-----------------------------Было в файле redux/reduсer.js: -----------------------------

//----- *Redux Toolkit*-----
// import { createReducer } from '@reduxjs/toolkit';
// import {setStatusFilter} from './actions';
// import { statusFilters } from './constants';

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     state.status = action.payload;
//   },
// });

//-----* Redux *-----
// import { combineReducers } from 'redux';
// import { statusFilters } from './constants';

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//  filters: filtersReducer,
// });

//-----------------------------Было в файле redux/actions.js: -----------------------------

//----- *Redux Toolkit*-----
// import { createAction, nanoid } from '@reduxjs/toolkit';

// export const setStatusFilter = createAction('filters/setStatusFilter');

//-----* Redux *-----
// import { nanoid } from 'nanoid';

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };
