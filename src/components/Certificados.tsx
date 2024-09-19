import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";

export function Certificados() {
    return (
        <Box p={15} color='#FFF'>
            <Typography variant='h4' mb={4} textAlign='center'>Certificados</Typography>

            <Stack direction='row' spacing={4} justifyContent='center'>
                <Card sx={{ width: 345, bgcolor: '#0B0414', color: '#C5C5C5' }}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height={140}
                            image="/certificados/NLW.png"
                        />

                        <CardContent>
                            <Typography variant="h6" color="#fff">NLW Journey - ReactJS</Typography>
                            <Typography variant="body2">Julho 2024</Typography>
                            <Typography variant="body1">Rocketseat</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ width: 345, bgcolor: '#0B0414', color: '#C5C5C5' }}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height={140}
                            image="/certificados/Scrum.png"
                        />

                        <CardContent>
                            <Typography variant="h6" color="#fff" noWrap>SCRUM FOUNDATION PROFESSIONAL CERTIFICATION SFPC</Typography>
                            <Typography variant="body2">Julho 2024</Typography>
                            <Typography variant="body1">Certiprof</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ width: 345, bgcolor: '#0B0414', color: '#C5C5C5' }}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height={140}
                            image="/certificados/Node.png"
                        />

                        <CardContent>
                            <Typography variant="h6" color="#fff" noWrap>Desenvolvimento back-end com Node.js</Typography>
                            <Typography variant="body2">Abril 2022</Typography>
                            <Typography variant="body1">DIO</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>

            <Box mt={4} display='flex' justifyContent='center'>
                <Typography
                    component="a"
                    href='https://www.linkedin.com/in/paulo-pqueiroz/details/certifications/'
                    target="_blank"
                    sx={{
                        textDecoration: "none",
                        background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                        color: '#FFF',
                        fontWeight: 'bold',
                        padding: '15px 20px',
                        borderRadius: 10,
                        textAlign: 'cebter'
                    }}
                >

                    Veja outros certificados
                </Typography>
            </Box>
        </Box>
    )
}