import { Box, ButtonBase, Card, CardContent, TextField, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import background from "./assets/background.svg";
import logo from "./assets/logo.png";

const Register = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${background})`
            }}
        >
            <Helmet
                title={"Marktodo - Cadastro"}
            />
            <Card
                raised
                sx={{
                    width: {
                        xs: "100%",
                        sm: "fit-content"
                    },
                    height: {
                        xs: "100%",
                        sm: "fit-content"
                    },
                    borderRadius: {
                        xs: 0,
                        sm: "inherit"
                    }
                }}
            >
                <CardContent
                    sx={{
                        minWidth: 350,
                        display: "flex",
                        flexDirection: "column",
                        padding: 5,
                        "& > *": {
                            m: "4px !important"
                        }
                    }}
                >
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src={logo}
                            width={"40"}
                            height={"40"}
                        />
                        <Typography>
                            <strong>Marktodo</strong>
                        </Typography>
                    </Box>
                    <Typography
                        variant={"h5"}
                    >
                        Criar conta
                    </Typography>
                    <TextField
                        placeholder={"Seu nome"}
                        label={"Nome"}
                    />
                    <TextField
                        placeholder={"example@email.com"}
                        label={"E-mail"}
                    />
                    <TextField
                        placeholder={"Senha"}
                        label={"Senha"}
                        type={"password"}
                    />
                    <Typography
                        sx={{
                            m: theme.spacing(0, 1)
                        }}
                    >
                        Já tem conta? <Link to={"/login"}>Entre aqui</Link>
                    </Typography>
                    <ButtonBase
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            padding: theme.spacing(1.2, 5),
                            alignSelf: "flex-end"
                        }}
                    >
                        Entrar
                    </ButtonBase>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Register;