import { v4 } from "uuid";

const INITIAL_STATE = {
    lessonsList: JSON.parse(localStorage.getItem("lessonList")) ?? []
};

export const lessonsReducer = (state = INITIAL_STATE, action) => {
    switch(action?.type) {
        case "addLesson":
            action.payload["id"] = v4();
            localStorage.setItem("lessonList", JSON.stringify([...state.lessonsList, action?.payload]));
            return {
                ...state,
                lessonsList: [...state.lessonsList, action?.payload]
            };
        case "editLesson": {
            const indexOfLesson = state.lessonsList.map(x => x?.id).indexOf(action?.id);
            const tempLessonsList = [...state.lessonsList];
            if (indexOfLesson !== -1) {
                const groupId = tempLessonsList[indexOfLesson]?.groupId;
                tempLessonsList[indexOfLesson] = {
                    id: action?.id,
                    name: action?.name,
                    description: action?.description,
                    groupId: groupId
                };
            }
            
            localStorage.setItem("lessonList", JSON.stringify([...tempLessonsList]));

            return {
                ...state,
                lessonsList: [...tempLessonsList]
            };
        }
        case "deleteLesson":
            const groups = state.lessonsList.filter(x => x?.id !== action?.id);
            localStorage.setItem("lessonList", JSON.stringify(groups));
            return {
                ...state,
                lessonsList: groups
            };
        default:
            return state;
    }
}