import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: theme.palette.primary.main,
                padding: theme.spacing(1, 0),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Typography
                variant={"h5"}
                sx={{
                    color: "white",
                    m: 3
                }}
            >
                Nossa localização
            </Typography>
            <Box
                component={"iframe"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6272.650048350054!2d-49.400438762727745!3d-20.801802587592878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad0da1271dbb%3A0xf23c7c5183f53c46!2sAv.%20Cenobelino%20de%20Barro%20Serra%20-%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%2C%20SP%2C%2015030-000!5e0!3m2!1spt-BR!2sbr!4v1655839434934!5m2!1spt-BR!2sbr"
                sx={{
                    border: 0,
                    width: "99%",
                    height: 250
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Box>
    );
}

export default Footer;