import { Box, Typography } from "@mui/material";

export function Sobre() {
    return (
        <Box
            height='100vh'
            sx={{
                backgroundImage: 'url(/background.png)',
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
                <Typography variant="h2" fontSize='5rem' fontWeight={600}>DESENVOLVEDOR</Typography>
                <Typography variant="h3"  letterSpacing={53} fontWeight={600}>FULLSTACK</Typography>
                <Typography variant="h4" letterSpacing={9.3}>ESPECIALISTA EM FRONTEND</Typography>
            </Box>
        </Box>
    );
}
