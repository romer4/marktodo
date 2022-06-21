export const addLesson = (name = "", description = "", groupId = "") => ({
    type: "addLesson",
    payload: {
        name,
        description,
        groupId
    }
});

export const editLesson = (id, name, description) => ({
    type: "editLesson",
    id,
    name,
    description
});

export const deleteLesson = (id) => ({
    type: "deleteLesson",
    id
});
