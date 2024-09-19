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
                height: '90px',

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
                <Toolbar disableGutters sx={{ gap: 10 }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="#"
                        color="#FFF"
                        sx={{
                            textDecoration: "none",
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
                        }}
                    >
                        Contato
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar >
    )
}