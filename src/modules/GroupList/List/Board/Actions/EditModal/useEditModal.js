import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editGroup } from "../../../../../../actions/groupsAction";

const useEditModal = props => {

    const {
        id,
        name: initialName,
        description: initialDescription
    } = props;

    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);

    const dispatch = useDispatch();
    const isFullscreen = useMediaQuery(theme => theme.breakpoints.down("sm"));

    const handleEdit = () => dispatch(editGroup(id, name, description));

    const handleName = e => setName(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    
    return {
        name,
        description,
        isFullscreen,
        handleDescription,
        handleName,
        handleEdit
    };
}

export default useEditModal;