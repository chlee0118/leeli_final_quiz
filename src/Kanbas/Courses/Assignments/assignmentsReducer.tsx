import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    assignments: [] as any[],
    assignment: {
        title: "New Assignment",
        course: "CSxxxx",
        points: 100,
        due_date: "Jan 1 2024",
        due_time: "9:00 AM",
        week_description: "Week X",
        description: "Description of the assignment",
        available_from: "01/01/2024",
        available_until: "12/31/2024",
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments = [action.payload, ...state.assignments];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});

export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;