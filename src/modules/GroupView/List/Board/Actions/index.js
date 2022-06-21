import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteLesson } from "../../../../../actions/lessonsAction";
import { DeleteButton, EditButton, ViewButton } from "../../../../../utils/buttons";
import EditModal from "./EditModal";

const Actions = props => {

    const {
        id,
        name,
        description
    } = props;

    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Box>
            <ViewButton
                onClick={() => navigate(`/group/${id}`)}
            />
            <EditButton
                onClick={() => setModal(true)}
            />
            <DeleteButton
                onClick={() => dispatch(deleteLesson(id))}
            />
            <EditModal
                open={modal}
                onClose={() => setModal(false)}
                initialData={{
                    id,
                    name,
                    description
                }}
            />
        </Box>
    );
}

export default Actions;