import { v4 } from "uuid";

export const addGroup = (name, description) => {
    const id = v4();
    
    let currentGroups = JSON.parse(localStorage.getItem("groupsList")) || [];

    const newGroup = {
        name,
        description,
        id
    };

    currentGroups = [...currentGroups, newGroup];
    console.log(currentGroups);

    localStorage.setItem("groupsList", JSON.stringify(currentGroups));
    window.dispatchEvent(new Event("storage"));

    return newGroup;
}

export const getGroup = (id) => {
    if (id) return JSON.parse(localStorage.getItem("groupsList")).find(x => x?.id == id) || {};
    else return JSON.parse(localStorage.getItem("groupList")) || [];
}

export const removeGroup = (id) => {
    let groups = JSON.parse(localStorage.getItem("groupsList"));
    groups.filter(x => x?.id != id);
    
    localStorage.setItem("groupsList", JSON.stringify(groups));
}