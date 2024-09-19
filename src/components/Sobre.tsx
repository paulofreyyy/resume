import { Box, Typography } from "@mui/material";

export function Sobre() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                mt: 15
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
                variant='h2'
                fontWeight='bold'
            >
                Desenvolvedor
                <Box
                    component='span'
                    sx={{
                        background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                        backgroundClip: "text",
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        ml: 3
                    }}
                >
                    Fullstack
                </Box>
            </Typography>

            <Typography
                variant='h5'
                color='#C5C5C5'
                width='50%'
                textAlign='center'
            >
                Sou Paulo Henrique, desenvolvedor com experiência principalmente em React JS, Node JS, NestJS e Typescript. Gosto de dar vida a ideias e ajudar as pessoas a automatizar e impulsionar seus negócios através da tecnologia.
            </Typography>

            <Box display='flex' gap={4}>
                <Typography
                    variant="h6"
                    component='a'
                    target="_blank"
                    href='wa.me/5521992419980'
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
                    variant="h6"
                    target="_blank"
                    component='a'
                    href='https://github.com/paulofreyyy'
                    sx={{
                        fontWeight: 'bold',
                        padding: '15px 25px',
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