import { Box, Typography } from '@mui/material';
import { ContatoIcon } from './ContatoIcon';

export function Contato() {
    return (
        <Box
            bgcolor='#0B0414'
            color='#fff'
            display='flex'
            justifyContent="center"
            alignItems="center"
            id='contato'
            p={10}
        >
            <Box width={{ xs: '100%', sm: '80%', md: '50%' }}>
                <Typography fontSize='2rem' fontWeight='bold'>Contato</Typography>

                <Typography variant='body1' color='#C1C1C1' my={4}>
                    Sou Paulo Henrique, desenvolvedor com experiência principalmente em React JS, Node JS, NestJS e Typescript. Gosto de dar vida a ideias e ajudar as pessoas a automatizar e impulsionar seus negócios através da tecnologia.
                </Typography>

                <Typography
                    variant='body1'
                    component='a'
                    href='mailto:paulohenriquep2000@gmail.com'
                    target='_blank'
                    display='flex'
                    gap={2}
                    fontWeight={600}
                    sx={{
                        textDecoration: "none",
                        color: "#FFF",
                    }}
                >
                    <ContatoIcon type="email" />
                    paulohenriquep2000@gmail.com
                </Typography>

                <Box mt={4} gap={2} display='flex'>
                    <ContatoIcon type="linkedin" />
                    <ContatoIcon type="github" />
                    <ContatoIcon type="whatsapp" />
                </Box>
            </Box>
        </Box>
    );
}
