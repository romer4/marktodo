import { Button, Dialog, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";
import useEditModal from "./useEditModal";
import CloseIcon from "@mui/icons-material/Close";

const EditModal = props => {

    const {
        initialData = {},
        onClose = () => {},
        ...others
    } = props;

    const {
        name,
        description,
        isFullscreen,
        handleDescription,
        handleName,
        handleEdit
    } = useEditModal(initialData);

    return (
        <Dialog
            {...others}
            onClose={onClose}
            fullScreen={isFullscreen}
        >
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                Editar grupo
                <IconButton
                    onClick={onClose}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 300,
                    "& > *": {
                        margin: "7px !important"
                    }
                }}
            >
                <TextField
                    label={"Nome do grupo"}
                    onChange={handleName}
                    value={name}
                />
                <TextField
                    label={"Descrição do grupo"}
                    onChange={handleDescription}
                    value={description}
                    multiline
                    rows={3}
                />
                <Button
                    color={"primary"}
                    variant={"contained"}
                    onClick={handleEdit}
                >
                    Salvar mudanças
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default EditModal;