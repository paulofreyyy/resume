import { Box, Typography } from "@mui/material";

export function Title() {
    return (
        <Typography
            color='white'
            fontSize={{ md: '48px', xs: '28px' }}
            fontWeight='bold'
        >
            Desenvolvedor
            <Box
                component='span'
                ml={{ md: 3, xs: 2 }}
                sx={{
                    background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                    backgroundClip: "text",
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}
            >
                Fullstack
            </Box>
        </Typography>
    );
}
