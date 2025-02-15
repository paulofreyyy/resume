import { Box } from "@mui/material";
import { AnimatedTypography } from "../../animations/TypographyAnimated";
import { typographyAnimation } from "../../../utils/animations";

export function Main() {
    return (
        <Box
            height='100vh'
            sx={{
                backgroundImage: 'url(/background_main.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
            display='flex'
            justifyContent='end'

        >
            <Box
                color='#FFF'
                width='55%'
                display='flex'
                gap={2}
                flexDirection='column'
                justifyContent='center'
            >
                <AnimatedTypography variant="h2" fontSize='5rem' fontWeight={600} animation={typographyAnimation(0.2)}>DESENVOLVEDOR</AnimatedTypography>
                <AnimatedTypography variant="h3" letterSpacing={53} fontWeight={600} animation={typographyAnimation(0.4)}>FULLSTACK</AnimatedTypography>
                <AnimatedTypography variant="h4" letterSpacing={9.3} animation={typographyAnimation(0.6)}>ESPECIALISTA EM FRONTEND</AnimatedTypography>
            </Box>
        </Box>
    );
}
