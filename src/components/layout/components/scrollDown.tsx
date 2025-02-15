import { Box, Typography } from "@mui/material"
import { FaArrowDown } from "react-icons/fa"
import { motion } from "framer-motion"

export const ScrollDown = () => {
    return (
        <Box
            component={motion.div}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                color: "#FFF",
                zIndex: 1
            }}
        >
            <Typography>Scroll down</Typography>
            <FaArrowDown size={20} />
        </Box>
    )
}