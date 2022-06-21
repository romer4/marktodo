import { Box, ButtonBase, Card, CardContent, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import background from "./assets/background.svg";
import logo from "./assets/logo.png";

const validEmails = ["admin@admin.com"];

const Login = () => {

    const [email, setEmail] = useState("");

    const theme = useTheme();
    const navigate = useNavigate();

    const handleSubmit = () => {
        validEmails.includes(email) && navigate("/");
        localStorage.setItem("loggedOnce", true);
    }

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover"
            }}
        >
            <Helmet
                title={"Marktodo - Login"}
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
                        Login
                    </Typography>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        Não tem conta? <Link to={"/register"}>Crie uma</Link>
                    </Typography>
                    <ButtonBase
                        onClick={handleSubmit}
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

export default Login;