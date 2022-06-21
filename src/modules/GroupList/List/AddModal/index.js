import { Button, Dialog, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";
import useAddModal from "./useAddModal";
import CloseIcon from "@mui/icons-material/Close";

const AddModal = props => {

    const {
        onClose = () => {},
        ...others
    } = props;

    const {
        name,
        description,
        isFullscreen,
        handleDescription,
        handleName,
        handleAdd
    } = useAddModal();

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
                Adicionar grupo
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
                    onClick={handleAdd}
                >
                    Adicionar
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default AddModal;