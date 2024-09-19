import { Box, Typography } from "@mui/material";

export function Sobre() {
    return (
        <Box
            gap={{ md: 10, xs: 4 }}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 10,
            }}
        >
            <Box
                component="img"
                src='/pauloPhoto.jpg'
                sx={{
                    height: 200,
                    width: 200,
                    objectFit: 'cover',
                    borderRadius: '100%',
                }}
            />

            <Typography
                color='white'
                fontSize={{ md: '56px', xs: '28px' }}
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

            <Typography
                fontSize={{ md: '28px', xs: '18px' }}
                color='#C5C5C5'
                width={{ md: '50%', xs: '100%' }}
                textAlign='center'
            >
                Sou Paulo Henrique, desenvolvedor com experiência principalmente em React JS, Node JS, NestJS e Typescript. Gosto de dar vida a ideias e ajudar as pessoas a automatizar e impulsionar seus negócios através da tecnologia.
            </Typography>

            <Box display='flex' flexDirection={{ md: 'row', xs: 'column' }} gap={{ md: 4, xs: 2 }} textAlign='center'>
                <Typography
                    fontSize={{ md: "20px", xs: '14px' }}
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
                    fontSize={{ md: "20px", xs: '14px' }}
                    target="_blank"
                    component='a'
                    href='https://github.com/paulofreyyy'
                    p='15px 20px'
                    sx={{
                        fontWeight: 'bold',
                        borderRadius: 10,
                        border: "2px solid white",
                        color: 'white',
                        textDecoration: 'none'
                    }}
                >
                    Veja meus projetos
                </Typography>
            </Box>
        </Box>
    )
}