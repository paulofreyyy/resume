import { Typography, TypographyProps } from "@mui/material"
import { motion } from "framer-motion"

const MotionTypography = motion(Typography)

interface Props extends TypographyProps{
    animation?: any;
}
export const AnimatedTypography = ({children, animation, ...props}: Props) =>{
    return(
        <MotionTypography {...animation} {...props}>
            {children}
        </MotionTypography>
    )
}