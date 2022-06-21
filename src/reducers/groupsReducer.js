import { v4 } from "uuid";

const initialState = {
    groupList: JSON.parse(localStorage.getItem("groupList")) ?? []
};

export const groupsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case "addGroup":
            action.payload["id"] = v4();
            localStorage.setItem("groupList", JSON.stringify([...state.groupList, action?.payload]));
            return {
                ...state,
                groupList: [...state.groupList, action?.payload]
            };
        case "editGroup": {
            const indexOfGroup = state.groupList.map(x => x?.id).indexOf(action?.id);
            const tempGroupList = [...state.groupList];
            if (indexOfGroup !== -1) {
                tempGroupList[indexOfGroup] = {
                    id: action?.id,
                    name: action?.name,
                    description: action?.description
                };
            }
            
            localStorage.setItem("groupList", JSON.stringify([...tempGroupList]));

            return {
                ...state,
                groupList: [...tempGroupList]
            };
        }
        case "deleteGroup":
            const groups = state.groupList.filter(x => x?.id !== action?.id);

            localStorage.setItem("groupList", JSON.stringify(groups));

            return {
                ...state,
                groupList: groups
            };
        default:
            return state;
    }
}