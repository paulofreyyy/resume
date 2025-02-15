import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import { CustomCard } from "./cards"

const experiences = [
    { logo: 'conversuLogo.jpeg', title: 'Analista QA / Implantação', startDate: 'Out 2024', endDate: 'Atualmente' },
    { logo: 'workingtechLogo.png', title: 'Desenvolvedor Frontend', startDate: 'Out 2024', endDate: 'Atualmente' },
    { logo: 'conversuLogo.jpeg', title: 'Desenvolvedor Fullstack', startDate: 'Jun 2024', endDate: 'Out 2024' },
    { logo: 'vortigoLogo.jpeg', title: 'Desenvolvedor Backend', startDate: 'Jun 2022', endDate: 'Nov 2023' },
    { logo: 'hashinfoLogo.jpeg', title: 'Estagiário', startDate: 'Dez 2021', endDate: 'Jun 2022' },
    { logo: 'winsigaLogo.jpeg', title: 'Estagiário', startDate: 'Mai 2021', endDate: 'Nov 2021' },
]

export const Experiencias = () => {
    return (
        <Box
            height='100vh'
            px={20}
            py={10}
            bgcolor='#000'
            color='#FFF'
            display='flex'
            flexDirection='column'
            gap={8}
        >
            <Typography variant="h3" fontWeight={600}>MINHA CARREIRA</Typography>

            <Grid container spacing={6}>
                {experiences.map((item, index) => (
                    <Grid size={4}>
                        <CustomCard
                            logo={item.logo}
                            title={item.title}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            key={index}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}