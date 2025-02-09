import { Box, IconButton } from "@mui/material"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export const SocialList = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                zIndex: 1,
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
            <IconButton><FaInstagram size={20} color="#FFF" /></IconButton>
        </Box>
    )
}