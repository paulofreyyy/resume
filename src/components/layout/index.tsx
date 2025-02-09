import { AppBar, Container, Box, Typography, IconButton } from "@mui/material";
import React from "react";
import { FaArrowDown, FaCode, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Props {
    children: React.ReactNode
}

export function Appbar({ children }: Props) {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Menu */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: '90px',
                }}
            >
                <Container maxWidth="xl" sx={{ display: { md: "flex" }, alignItems: 'center', justifyContent: 'center' }}>
                    <Box display='flex' alignItems='center' justifyContent='space-between' width='100%' px={3}>
                        <Box display='flex' alignItems='center' gap={2}>
                            <FaCode size={30} />
                            <Typography textAlign='center' variant="h6" fontWeight={600}>
                                PAULO FREY
                            </Typography>
                        </Box>

                        {/* MenuItens*/}
                        <Box display='flex' alignItems='center' gap={10}>
                            <Typography fontSize='0.9rem'>SOBRE MIM</Typography>
                            <Typography fontSize='0.9rem'>PORTIFOLIO</Typography>
                            <Typography fontSize='0.9rem'>CARREIRA</Typography>
                        </Box>
                    </Box>
                </Container>
            </AppBar >

            {/* Conteúdo principal */}
            <Box
                sx={{
                    flex: 1,
                    position: 'relative'
                }}
            >
                {/* Redes sociais */}
                <Box
                    sx={{
                        position: 'fixed',
                        left: 20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <IconButton><FaGithub size={20} color="#FFF" /></IconButton>
                    <IconButton><FaLinkedin size={20} color="#FFF" /></IconButton>
                    <IconButton><FaTwitter size={20} color="#FFF" /></IconButton>
                </Box>

                {/* Indicador de seção */}
                <Typography
                    sx={{
                        position: 'fixed',
                        color: "#FFF",
                        bottom: 20,
                        left: 20,
                        fontSize: '6rem',
                        fontWeight: 600,
                    }}
                >
                    01
                </Typography>

                {/* Scroll Down */}
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        color: "#FFF"
                    }}
                >
                    <Typography>Scroll down</Typography>
                    <FaArrowDown size={20} />
                </Box>

                {/* CONTEÚDO PRINCIPAL */}
                <Box
                    position='relative'
                    zIndex={-1000}
                    flex={1}
                >
                    {children}
                </Box>
            </Box>
        </Box >
    )
}