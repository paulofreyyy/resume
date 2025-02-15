import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion";

interface Props {
    link: string;
    image: string;
}

export const ProjectCard = ({ link, image }: Props) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
        >
            <Box
                component='a'
                href={link}
                target="_blank"
                position='relative'
                bgcolor='#3d3d3d'
                borderRadius={5}
                height={200}
                color='#FFF'
                textAlign='center'
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                    cursor: 'pointer',
                    backgroundImage: `url(/projetos/${image}.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover, contain',
                    textDecoration: 'none',
                    '&: hover': {
                        '& .typography-hover': {
                            bgcolor: '#000',
                            display: 'block',
                        }
                    }
                }}
            >
                <Typography
                    className="typography-hover"
                    component='a'
                    href="https://github.com/paulofreyyy"
                    target="_blank"
                    sx={{
                        fontWeight: 600,
                        color: "#FFF",
                        textDecoration: 'none',
                        width: 150,
                        py: 2,
                        borderRadius: 20,
                        display: 'none',
                    }}
                >
                    Visualizar
                </Typography>
            </Box>
        </motion.div >
    )
}