import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import Header from "../../common/Header";
import ListContainer from "./List";
import SearchBar from "./SearchBar";

const GroupList = () => {
    return (
        <Box>
            <Helmet
                title={"Marktodo - Grupos"}
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

export default GroupList;