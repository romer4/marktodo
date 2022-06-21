import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Header = props => {
    return (
        <Box
            sx={{
                backgroundColor: grey[900],
                padding: 3,
                color: "white"
            }}
        >
            <Typography
                variant={"h4"}
            >
                TODO(s)
            </Typography>
        </Box>
    );
}

export default Header;
