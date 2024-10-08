import { useTheme, AppBar, Container, IconButton, useMediaQuery, Menu, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCallback, useState } from "react";
import { MenuItemLink } from "./MenuItemLink";
import { UserProfile } from "./UserProfile";
import { DesktopMenu } from "./DesktopMenu";
import { ContatoIcon } from "../contato/ContatoIcon";
import { RiAliensFill } from "react-icons/ri";

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
                            <MenuItemLink label="Skills" onClick={() => { handleMenuClose(); scrollSmooth('skills'); }} href="" />
                                <MenuItemLink label="Experiências" onClick={() => { handleMenuClose(); scrollSmooth('experiencias'); }} href="" />
                                <MenuItemLink label="Certificados" onClick={() => { handleMenuClose(); scrollSmooth('certificados'); }} href="" />
                                <MenuItemLink label="Contato" onClick={() => { handleMenuClose(); scrollSmooth('contato'); }} href="" />
                            </Menu>
                        </>
                    ) : (
                        <Box display='flex' alignItems='center' justifyContent='space-around' width='100%'>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenuOpen}
                            >
                                <RiAliensFill />
                            </IconButton>

                            {/* Centralize o DesktopMenu */}
                            <Box display="flex" justifyContent="center">
                                <DesktopMenu scrollSmooth={scrollSmooth} handleMenuClose={handleMenuClose} />
                            </Box>

                            {/* Ícones de contato */}
                            <Box gap={2} display='flex'>
                                <ContatoIcon type="linkedin" />
                                <ContatoIcon type="github" />
                            </Box>
                        </Box>
                    )}

            </Container>
        </AppBar >
    )
}