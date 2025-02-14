import { Box, Typography } from "@mui/material"

export const ProjectCard = () => {
    return (
        <>
            <Box
                position='relative'
                bgcolor='#3d3d3d'
                borderRadius={5}
                height={200}
                color='#FFF'
                textAlign='center'
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                    cursor: 'pointer',
                    backgroundImage: 'url(/projetos/lawyer.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    '&: hover': {
                        '& .typography-hover': {
                            bgcolor: '#000',
                            display:'block',
                        }
                    }
                }}
            >
                <Typography
                    className="typography-hover"
                    sx={{
                        fontWeight: 600,
                        width: 150,
                        py: 2,
                        borderRadius: 20,
                        display:'none',
                    }}
                >
                    Visualizar
                </Typography>
            </Box>
        </>
    )
}