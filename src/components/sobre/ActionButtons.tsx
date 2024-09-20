import { Box, Typography } from "@mui/material";

export function ActionButtons() {
    return (
        <Box display='flex' flexDirection={{ md: 'row', xs: 'column' }} gap={{ md: 4, xs: 2 }} textAlign='center'>
            <Typography
                fontSize={{ md: "16px", xs: '12px' }}
                component='a'
                target="_blank"
                href='https://api.whatsapp.com/send/?phone=5521992419980'
                sx={{
                    background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                    color: '#FFF',
                    fontWeight: 'bold',
                    padding: '15px 25px',
                    borderRadius: 10,
                    textDecoration: "none",
                }}
            >
                Fale comigo
            </Typography>
            <Typography
                fontSize={{ md: "16px", xs: '12px' }}
                target="_blank"
                component='a'
                href='https://github.com/paulofreyyy'
                sx={{
                    fontWeight: 'bold',
                    borderRadius: 10,
                    border: "2px solid white",
                    color: 'white',
                    textDecoration: 'none',
                    padding: '15px 20px',
                }}
            >
                Veja meus projetos
            </Typography>
        </Box>
    );
}
