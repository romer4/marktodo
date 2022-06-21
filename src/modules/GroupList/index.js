import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import Header from "../../common/Header";
import Footer from "../Footer";
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
                    flexDirection: "column",
                    minHeight: "90vh"
                }}
            >
                <SearchBar/>
                <ListContainer/>
            </Box>
            <Footer/>
        </Box>
    );
}

export default GroupList;