import { Box, List, Fab, useTheme, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import Board from "./Board";
import AddIcon from '@mui/icons-material/Add';
import AddModal from "./AddModal";
import emptyImage from "./assets/empty.jpg";

const ListContainer = () => {

    const [modal, setModal] = useState(false);

    const theme = useTheme();
    const groups = useSelector(store => store.groups.groupList);

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
            {groups?.length !== 0 && (
                <AnimatePresence>
                    <Reorder.Group
                        values={groups}
                        as={Box}
                        sx={{
                            width: "100%"
                        }}
                    >
                        {groups?.map((item, itemKey) => (
                            <Reorder.Item
                                key={item?.id}
                                value={item}
                                as={"div"}
                                dragListener={false}
                            >
                                <Board
                                    key={itemKey}
                                    itemKey={itemKey}
                                    {...item}
                                />
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </AnimatePresence>
            )}
            {groups?.length == 0 && (
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
                        Sem grupos
                    </Typography>
                </Box>
            )}
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