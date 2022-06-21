import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLesson } from "../../../../actions/lessonsAction";
import { useParams } from "react-router-dom";

const useAddModal = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();
    const isFullscreen = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const { groupId } = useParams();

    const handleAdd = () => dispatch(addLesson(name, description, groupId));

    const handleName = e => setName(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    
    return {
        name,
        description,
        isFullscreen,
        handleDescription,
        handleName,
        handleAdd
    };
}

export default useAddModal;