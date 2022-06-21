export const addGroup = (name = "", description = "") => ({
    type: "addGroup",
    payload: {
        name,
        description
    }
});

export const editGroup = (id, name, description) => ({
    type: "editGroup",
    id,
    name,
    description
});

export const deleteGroup = (id) => ({
    type: "deleteGroup",
    id
});