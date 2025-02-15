import { Box } from "@mui/material"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { SocialButtonAnimated } from "../../animations/SocialButtonAnimated"
import { motion } from "framer-motion"

export const SocialList = () => {
    return (
        <Box
            component={motion.div}
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
            <SocialButtonAnimated
                link='https://github.com/paulofreyyy'
                delay={0.2}
                icon={<FaGithub size={20} color="#FFF" />}
            />

            <SocialButtonAnimated
                link="https://www.linkedin.com/in/paulo-pqueiroz/"
                delay={0.4}
                icon={<FaLinkedin size={20} color="#FFF" />}
            />
            <SocialButtonAnimated
                link="https://www.instagram.com/frey.ph/"
                delay={0.6}
                icon={<FaInstagram size={20} color="#FFF" />}
            />
            <SocialButtonAnimated
                link="wa.me/5521992419980"
                delay={0.8}
                icon={<FaWhatsapp size={20} color="#FFF" />}
            />
        </Box >
    )
}