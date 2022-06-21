import { configureStore } from "@reduxjs/toolkit";
import { groupsReducer } from "../reducers/groupsReducer";
import { lessonsReducer } from "../reducers/lessonsReducer";

export default configureStore({
    reducer: {
        groups: groupsReducer,
        lessons: lessonsReducer
    }
});