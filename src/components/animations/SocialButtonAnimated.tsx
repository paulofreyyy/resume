import { IconButton } from "@mui/material"
import { motion } from "framer-motion"
import { ReactNode } from "react";

interface Props {
    icon?: ReactNode;
    delay: number
    link: string;
}

export const SocialButtonAnimated = ({ icon, link, delay, ...props }: Props) => {
    return (
        <motion.div
            whileHover={{
                rotateZ: 15,
                scale: 1.5,
                transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: delay, duration: 0.6, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            animate="visible"
        >
            <IconButton {...props} href={link} target="_blank">
                {icon}
            </IconButton>
        </motion.div>
    )
}