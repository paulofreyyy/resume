import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import { ProjectCard } from "./components/ProjectCard"
import { motion } from "framer-motion";

const projetos = [
    { link: "https://github.com/paulofreyyy/lawyer", image: 'lawyer' },
    { link: "https://github.com/paulofreyyy/resume", image: 'resume' },
    { link: "https://github.com/paulofreyyy/pokedex", image: 'pokedex' },
    { link: "https://github.com/paulofreyyy/userDashboard", image: 'userDashboard' },
    { link: "https://github.com/paulofreyyy/reading-manager", image: 'readingBook' },
    { link: "https://kingbeneficios.org/", image: 'king' },
]

export const Portifolio = () => {
    return (
        <Box
            height='100vh'
            px={20}
            py={10}
            bgcolor='#000'
            color='#FFF'
            display='flex'
            flexDirection='column'
            gap={8}
        >
            <Typography variant="h3" fontWeight={600}>MEUS TRABALHOS</Typography>

            <Grid container spacing={6}>
                {projetos.map((projeto, index) => (
                    <Grid size={4} key={index}>
                        <ProjectCard link={projeto.link} image={projeto.image} />
                    </Grid>
                ))}
            </Grid>

            <Box alignSelf='center'>
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <Typography
                        component="a"
                        href="https://github.com/paulofreyyy"
                        target="_blank"
                        bgcolor='#FFF'
                        color="#000"
                        py={2}
                        px={5}
                        fontWeight={600}
                        borderRadius={3}
                        sx={{
                            textDecoration: 'none',
                        }}
                    >
                        VER MAIS
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    )
}