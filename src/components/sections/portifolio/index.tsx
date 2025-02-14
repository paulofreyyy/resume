import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import { ProjectCard } from "./components/ProjectCard"

export const Portifolio = () => {
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
            <Typography variant="h3" fontWeight={600}>MEUS TRABALHOS</Typography>

            <Grid container spacing={6}>
                <Grid size={4}>
                    <ProjectCard />
                </Grid>
            </Grid>

            <Box alignSelf='center'>
                <Typography
                    component="a"
                    href="https://github.com/paulofreyyy"
                    target="_blank"
                    bgcolor='#FFF'
                    color="#000"
                    py={2}
                    px={5}
                    fontWeight={600}
                    borderRadius={3}
                    sx={{
                        textDecoration:'none',
                        transition: '0.7s ease',
                        '&: hover':{
                            bgcolor:'red',
                            px: 7
                        }
                    }}
                >
                    VER MAIS
                </Typography>
            </Box>
        </Box>
    )
}