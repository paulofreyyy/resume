import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";

export function Certificados() {
    return (
        <Box p={15} color='#FFF' id='certificados'>
            <Typography variant='h4' mb={4} textAlign='center' fontWeight='bold'>Certificados</Typography>

            <Stack direction={{ md: 'row', sm: 'column' }} spacing={4} gap={4} justifyContent='center' alignItems={'center'}>
                <Card sx={{ width: 345, bgcolor: '#0B0414', color: '#C5C5C5' }}>
                    <CardActionArea
                        LinkComponent='a'
                        href='https://app.rocketseat.com.br/certificates/3c8e1ced-0a92-4e8c-be85-6688a4c3fe54'
                        target="_blank"
                    >
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
                    <CardActionArea
                        LinkComponent='a'
                        href='https://media.licdn.com/dms/image/v2/D4D2DAQHh5F3sp7uaBA/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1722091896601?e=1727377200&v=beta&t=0m_Nl4u-WMFbUY5kZLRRueRa34iWCvg8a5koHMElI2Y'
                        target="_blank"
                    >
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
                    <CardActionArea
                        LinkComponent='a'
                        href='https://drive.google.com/file/d/1_hVy_qeI1gnn8NF0RODaD5fl_1nUdjqU/view?usp=sharing'
                        target="_blank"
                    >
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
                    p='15px 40px'
                    align="center"
                    sx={{
                        textDecoration: "none",
                        background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                        color: '#FFF',
                        fontWeight: 'bold',
                        borderRadius: 10,
                    }}
                >

                    Ver mais
                </Typography>
            </Box>
        </Box>
    )
}