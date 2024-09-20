import { Box, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
            <Box
                width={{ xs: '100%', sm: '80%', md: '50%' }}
            >
                <Typography fontSize='2rem' fontWeight='bold'>
                    Contato
                </Typography>

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
                    <MailOutlineIcon /> paulohenriquep2000@gmail.com
                </Typography>

                <Box mt={4} gap={2} display='flex'>
                    <Typography
                        component='a'
                        href='https://www.linkedin.com/in/paulo-pqueiroz/'
                        target='_blank'
                        sx={{
                            textDecoration: "none",
                            color: "#fff",
                        }}
                    >
                        <LinkedInIcon fontSize='large' />
                    </Typography>
                    <Typography
                        component='a'
                        href='https://github.com/paulofreyyy'
                        target='_blank'
                        sx={{
                            textDecoration: "none",
                            color: "#fff",
                        }}
                    >
                        <GitHubIcon fontSize='large' />
                    </Typography>
                    <Typography
                        component='a'
                        href='https://api.whatsapp.com/send/?phone=5521992419980'
                        target='_blank'
                        sx={{
                            textDecoration: "none",
                            color: "#fff",
                        }}
                    >
                        <WhatsAppIcon fontSize='large' />
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}