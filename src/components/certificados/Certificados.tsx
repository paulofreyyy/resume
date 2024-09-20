import { Box, Stack, Typography } from "@mui/material";
import { CertificadoCard } from "./CertificadoCard";

export function Certificados() {
    return (
        <Box p={15} color='#FFF' id='certificados'>
            <Typography variant='h4' mb={4} textAlign='center' fontWeight='bold'>Certificados</Typography>

            <Stack direction={{ md: 'row', sm: 'column' }} spacing={4} gap={4} justifyContent='center' alignItems={'center'}>
                <CertificadoCard
                    title="NLW Journey - ReactJS"
                    date="Julho 2024"
                    issuer="Rocketseat"
                    image="/certificados/NLW.png"
                    link="https://app.rocketseat.com.br/certificates/3c8e1ced-0a92-4e8c-be85-6688a4c3fe54"
                />
                <CertificadoCard
                    title="SCRUM FOUNDATION PROFESSIONAL CERTIFICATION SFPC"
                    date="Julho 2024"
                    issuer="Certiprof"
                    image="/certificados/Scrum.png"
                    link="https://media.licdn.com/dms/image/v2/D4D2DAQHh5F3sp7uaBA/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1722091896601?e=1727377200&v=beta&t=0m_Nl4u-WMFbUY5kZLRRueRa34iWCvg8a5koHMElI2Y"
                />
                <CertificadoCard
                    title="Desenvolvimento back-end com Node.js"
                    date="Abril 2022"
                    issuer="DIO"
                    image="/certificados/Node.png"
                    link="https://drive.google.com/file/d/1_hVy_qeI1gnn8NF0RODaD5fl_1nUdjqU/view?usp=sharing"
                />
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
    );
}
