import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export function Appbar() {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#0B0414",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: '90px'
            }}

        >
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: 'center',
                }}
            >
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="#"
                        color="#FFF"
                        sx={{
                            textDecoration: "none",
                            mr: 10,
                        }}
                    >
                        Início
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="#"
                        color="#FFF"
                        sx={{
                            textDecoration: "none",
                            mr: 10,
                        }}
                    >
                        Projetos
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="#"
                        color="#FFF"
                        sx={{
                            textDecoration: "none",
                            mr: 10,
                        }}
                    >
                        Experiências
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="#"
                        color="#FFF"
                        sx={{
                            textDecoration: "none",
                            mr: 10,
                        }}
                    >
                        Certificados
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="#"
                        color="#FFF"
                        sx={{
                            textDecoration: "none",
                            mr: 10,
                        }}
                    >
                        Contato
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar >
    )
}