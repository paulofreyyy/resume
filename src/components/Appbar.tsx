import { useTheme, AppBar, Container, IconButton, Toolbar, Typography, useMediaQuery, Menu, MenuItem, Box, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCallback, useState } from "react";

export function Appbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const scrollSmooth = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [])

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
                    display: { md: "flex" },
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Toolbar disableGutters sx={{ gap: 10 }}>
                    {isMobile ? (
                        <>
                            <Box display='flex' alignItems='center' justifyContent='space-between' width='100%' >
                                <Box display='flex' alignItems='center' gap={2}>
                                    <Avatar src="/pauloPhoto.jpg" />
                                    <Box
                                        display='flex'
                                        flexDirection='column'
                                        alignItems='start'
                                    >
                                        <Typography
                                            textAlign='center'
                                            variant="body2"
                                        >
                                            Paulo Henrique Pereira
                                        </Typography>
                                        <Typography
                                            textAlign='center'
                                            variant="body2"
                                            sx={{
                                                background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                                                backgroundClip: "text",
                                                WebkitBackgroundClip: 'text',
                                                color: 'transparent',
                                                fontWeight: "600",
                                            }}
                                        >
                                            Desenvolvedor Fullstack
                                        </Typography>
                                    </Box>
                                </Box>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleMenuOpen}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                MenuListProps={{
                                    sx: {
                                        bgcolor: '#191123',
                                    }
                                }}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <Typography
                                        textAlign='center'
                                        component='a'
                                        href='https://github.com/paulofreyyy'
                                        target="_blank"
                                        sx={{
                                            textDecoration: "none",
                                            color: "#FFF",
                                        }}
                                    >
                                        Projetos
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => { handleMenuClose(); scrollSmooth('experiencias') }}>
                                    <Typography
                                        textAlign='center'
                                        sx={{
                                            textDecoration: "none",
                                            color: "#FFF",
                                        }}
                                    >
                                        Experiências
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => { handleMenuClose(); scrollSmooth('certificados') }}>
                                    <Typography
                                        textAlign='center'
                                        sx={{
                                            textDecoration: "none",
                                            color: "#FFF",
                                        }}
                                    >
                                        Certificados
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => { handleMenuClose(); scrollSmooth('contato') }}>
                                    <Typography
                                        textAlign='center'
                                        sx={{
                                            textDecoration: "none",
                                            color: "#FFF",
                                        }}
                                    >
                                        Contato
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component='a'
                                    href="https://github.com/paulofreyyy"
                                    target="_blank"
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
                                    color="#FFF"
                                    sx={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => { scrollSmooth('experiencias') }}
                                >
                                    Experiências
                                </Typography>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    color="#FFF"
                                    sx={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => { scrollSmooth('certificados') }}
                                >
                                    Certificados
                                </Typography>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    color="#FFF"
                                    sx={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => { scrollSmooth('contato') }}
                                >
                                    Contato
                                </Typography>
                        </>
                    )}

                </Toolbar>
            </Container>
        </AppBar >
    )
}