import { useTheme, AppBar, Container, IconButton, Toolbar, useMediaQuery, Menu, Box, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCallback, useState } from "react";
import { MenuItemLink } from "./menu/MenuItemLink";
import { UserProfile } from "./menu/UserProfile";
import { DesktopMenu } from "./menu/DesktopMenu";

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
            <Container maxWidth="xl" sx={{ display: { md: "flex" }, alignItems: 'center', justifyContent: 'center' }}>
                <Toolbar disableGutters sx={{ gap: 10 }}>
                    {isMobile ? (
                        <>
                            <Box display='flex' alignItems='center' justifyContent='space-between' width='100%'>
                                <UserProfile />
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
                                MenuListProps={{ sx: { bgcolor: '#191123' } }}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                <MenuItemLink label="Projetos" onClick={handleMenuClose} href="https://github.com/paulofreyyy" />
                                <MenuItemLink label="Experiências" onClick={() => { handleMenuClose(); scrollSmooth('experiencias'); }} href="" />
                                <MenuItemLink label="Certificados" onClick={() => { handleMenuClose(); scrollSmooth('certificados'); }} href="" />
                                <MenuItemLink label="Contato" onClick={() => { handleMenuClose(); scrollSmooth('contato'); }} href="" />
                            </Menu>
                        </>
                    ) : (
                            <DesktopMenu scrollSmooth={scrollSmooth} handleMenuClose={handleMenuClose} />
                    )}

                </Toolbar>
            </Container>
        </AppBar >
    )
}