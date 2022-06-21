import { Box, Button, TextField, useTheme } from "@mui/material";

const SearchBar = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                margin: {
                    xs: theme.spacing(2, 4),
                    md: theme.spacing(2, 20)
                }
            }}
        >
            <TextField
                label={"Pesquisar por tarefas"}
                size={"small"}
                sx={{
                    flex: 1
                }}
            />
            <Button
                variant={"contained"}
            >
                Pesquisar
            </Button>
        </Box>
    );
}

export default SearchBar;