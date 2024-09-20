import { useTheme, AppBar, Container, IconButton, Toolbar, Typography, useMediaQuery, Menu, MenuItem, Box, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

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
                                    <Typography textAlign='center' variant="body2">
                                        Paulo Henrique Pereira
                                    </Typography>
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
                                        bgcolor: '#0B0414',
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
                                        href='#'
                                        sx={{
                                            textDecoration: "none",
                                            color: "#FFF",
                                        }}
                                    >
                                        Início
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Typography
                                        textAlign='center'
                                        component='a'
                                        href='#'
                                        sx={{
                                            textDecoration: "none",
                                            color: "#FFF",
                                        }}
                                    >
                                        Projetos
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Typography
                                        textAlign='center'
                                        component='a'
                                        href='#'
                                        sx={{
                                            textDecoration: "none",
                                            color: "#FFF",
                                        }}
                                    >
                                        Experiências
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Typography
                                        textAlign='center'
                                        component='a'
                                        href='#'
                                        sx={{
                                            textDecoration: "none",
                                            color: "#FFF",
                                        }}
                                    >
                                        Certificados
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Typography
                                        textAlign='center'
                                        component='a'
                                        href='#'
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
                        </>
                    )}

                </Toolbar>
            </Container>
        </AppBar >
    )
}