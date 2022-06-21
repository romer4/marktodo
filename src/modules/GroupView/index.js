import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../common/Header";
import ListContainer from "./List";
import SearchBar from "./SearchBar";

const GroupView = () => {

    const { groupId } = useParams();
    
    return (
        <Box>
            <Helmet
                title={"Marktodo - Tarefas"}
            />
            <Header/>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <SearchBar/>
                <ListContainer/>
            </Box>
        </Box>
    );
}

export default GroupView;