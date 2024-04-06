import axios from "axios";
const COURSES_API = "https://webdev-1.onrender.com/api/courses";
const ASSIGNMENTS_API = "https://webdev-1.onrender.com/api/assignments";

export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const deleteAssignment = async (assignmentId: any) => {
    const response = await axios
        .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

export const createAssignment = async (courseId: any, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const updateAssignment = async (assignment: any) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
};

