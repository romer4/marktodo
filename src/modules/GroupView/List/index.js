import { Box, List, Fab, useTheme, ThemeProvider, createTheme, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Board from "./Board";
import AddIcon from '@mui/icons-material/Add';
import AddModal from "./AddModal";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import emptyImage from "./assets/empty.jpg";

const backButtonTheme = createTheme({
    palette: {
        primary: {
            main: grey[600]
        }
    }
});

const ListContainer = () => {

    const [modal, setModal] = useState(false);

    const { groupId } = useParams();
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lessons = useSelector(store => store.lessons.lessonsList.filter(x => x?.groupId === groupId));

    return (
        <Box
            component={List}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: {
                    xs: theme.spacing(2, 4),
                    md: theme.spacing(2, 20)
                }
            }}
        >
            {lessons?.length !== 0 && (
                <AnimatePresence>
                    <Reorder.Group
                        values={lessons}
                        as={Box}
                        style={{
                            width: "100%"
                        }}
                    >
                        {lessons?.map((item, itemKey) => (
                            <Reorder.Item
                                key={item?.id}
                                value={item}
                                dragListener={false}
                                as={"div"}
                            >
                                <Board
                                    itemKey={itemKey}
                                    {...item}
                                />
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </AnimatePresence>
            )}
            {lessons?.length == 0 && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Box
                        component={"img"}
                        src={emptyImage}
                        sx={{
                            width: 300,
                            height: 300,
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    />
                    <Typography
                        variant={"h6"}
                        align={"center"}
                    >
                        Sem tarefas
                    </Typography>
                </Box>
            )}
            <ThemeProvider
                theme={backButtonTheme}
            >
                <Fab
                    component={motion.button}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    color={"primary"}
                    onClick={() => navigate("/")}
                    sx={{
                        position: "fixed",
                        left: 10,
                        bottom: 10
                    }}
                >
                    <ArrowBackIcon/>
                </Fab>
            </ThemeProvider>
            <Fab
                color={"primary"}
                onClick={() => setModal(true)}
                sx={{
                    position: "fixed",
                    right: 10,
                    bottom: 10
                }}
            >
                <AddIcon/>
            </Fab>
            <AddModal
                open={modal}
                onClose={() => setModal(false)}
            />
        </Box>
    );
}

export default ListContainer;