import axios from "axios";
const BASE_API = process.env.REACT_APP_API_BASE;
const COURSES_API = `${BASE_API}/api/courses`;
const ASSIGNMENTS_API = `${BASE_API}/api/assignments`;

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

