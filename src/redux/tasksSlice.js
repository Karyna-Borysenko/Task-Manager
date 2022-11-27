import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

// Общий Pending
const handlePending = state => {
  state.isLoading = true;
};

// Общий Rejected
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // Запрос задач
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,
    // Добавление задачи
    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: handleRejected,
    // Удаление задачи
    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected]: handleRejected,
    // Переключение задачи
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  },
});

export const tasksReducer = tasksSlice.reducer;

//-----------------------------Для локального хранилища -----------------------------
//----------Redux Toolkit / createSlice - вместо файлов reducer и actions -----------------------------

// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteTask(state, action) {
//       const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
//     },
//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//           break;
//         }
//       }
//     },
//   },
// });

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// export const tasksReducer = tasksSlice.reducer;

//-----------------------------Было в файле redux/reduсer.js: -----------------------------

//----- *Redux Toolkit*-----
// import { createReducer } from '@reduxjs/toolkit';
// import {
//   addTask,
//   deleteTask,
//   setStatusFilter,
//   toggleCompleted,
// } from './actions';
// import { statusFilters } from './constants';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteTask]: (state, action) => {
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
//   [toggleCompleted]: (state, action) => {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//         break;
//       }
//     }
//   },
// });

//-----* Redux *-----
// import { combineReducers } from 'redux';
// import { statusFilters } from './constants';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return [...state, action.payload];
//     case 'tasks/deleteTask':
//       return state.filter(task => task.id !== action.payload);
//     case 'tasks/toggleCompleted':
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
// });

//-----------------------------Было в файле redux/actions.js: -----------------------------

//----- *Redux Toolkit*-----
// import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addTask = createAction('tasks/addTask', text => {
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       completed: false,
//     },
//   };
// });
// export const deleteTask = createAction('tasks/deleteTask');
// export const toggleCompleted = createAction('tasks/toggleCompleted');

//-----* Redux *-----
// import { nanoid } from 'nanoid';

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };
// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };
// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };
