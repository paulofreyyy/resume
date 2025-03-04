import { AppBar, Container, Box, Typography } from "@mui/material";
import React from "react";
import { FaCode } from "react-icons/fa";
import { SocialList } from "./components/socialList";
import { ScrollDown } from "./components/scrollDown";
import { MenuItemAnimated } from "../animations/MenuItemAnimated";
import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode
}

export function Appbar({ children }: Props) {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
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
                        <Box
                            component={motion.div}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: { duration: 0.6, ease: "easeOut" }
                            }}
                            viewport={{ once: true }}
                            display='flex'
                            alignItems='center'
                            gap={2}
                        >
                            <FaCode size={30} />
                            <Typography textAlign='center' variant="h6" fontWeight={600}>
                                PAULO FREY
                            </Typography>
                        </Box>

                        {/* MenuItens*/}
                        <Box display='flex' alignItems='center' gap={10}>
                            <MenuItemAnimated
                                section="#sobre"
                                delay={0.4}
                            >
                                SOBRE MIM
                            </MenuItemAnimated>

                            <MenuItemAnimated
                                section="#portifolio"
                                delay={0.6}
                            >
                                PORTIFOLIO
                            </MenuItemAnimated>

                            <MenuItemAnimated
                                section="#carreira"
                                delay={0.8}
                            >
                                CARREIRA
                            </MenuItemAnimated>
                        </Box>
                    </Box>
                </Container>
            </AppBar >

            {/* Conteúdo principal */}
            <Box
                sx={{
                    flex: 1,
                    position: 'relative',
                }}
            >
                {/* Redes sociais */}
                <SocialList />

                {/* Scroll Down */}
                <ScrollDown />

                {/* CONTEÚDO PRINCIPAL */}
                <Box
                    position='relative'
                    flex={1}
                >
                    {children}
                </Box>
            </Box>
        </Box >
    )
}