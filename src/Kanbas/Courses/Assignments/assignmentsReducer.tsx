// src/Kanbas/Courses/Assignments/assignmentsReducer.tsx
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
  assignment: {
    _id: "",
    title: "",
    course: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    selectAssignment: (state, action) => {
      state.assignment =
        state.assignments.find(
          (assignment) => assignment._id === action.payload
        ) || state.assignment;
    },
    setAssignment:  (state, action) => {
        state.assignment = action.payload;
      },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
  setAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
