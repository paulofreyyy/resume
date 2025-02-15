import { Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
    children: any;
    section: string;
    delay: number;
}

export const MenuItemAnimated = ({ children, delay, section, ...props }: Props) => {
    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: delay, duration: 0.6, ease: "easeOut" }
            }}
            whileHover={{
                scale: 1.1,
                transition: {
                    duration: 0.3
                }
            }}
            viewport={{ once: true }}
        >
            <Typography
                fontSize='0.9rem'
                component='a' href={section}
                sx={{
                    textDecoration: 'none',
                    color: "#FFF",
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '2px',
                        bottom: '-5px',
                        left: '0',
                        backgroundColor: '#FFF',
                        transform: 'scaleX(0)',
                        transformOrigin: 'bottom right',
                        transition: 'transform 0.3s ease-out',
                    },
                    '&:hover::after': {
                        transform: 'scaleX(1)',
                        transformOrigin: 'bottom left',
                    }
                }}
                {...props}
            >
                {children}
            </Typography>
        </motion.div>
    )
}