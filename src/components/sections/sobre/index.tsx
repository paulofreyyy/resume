import { Box, Typography } from "@mui/material"
import { SkillBar } from "./components/skillBar"

export const SobreMim = () => {
    return (
        <Box
            height='100vh'
            color='#FFF'
            bgcolor='#000'
            px={20}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            position={'relative'}
        >
            <Box width='60%' height='fit-content'>
                <Typography variant="h3">DESENVOLVEDOR</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt itaque doloremque molestias, eius minus tenetur molestiae,
                    temporibus facere dicta corrupti aperiam quisquam dolor, non aliquam cumque. Eius, quos eveniet.
                </Typography>

                {/* Skills */}
                <Box mt={4} display='flex' flexDirection='column' gap={1} width='50%'>
                    <SkillBar title="JAVASCRIPT" value={95} />
                    <SkillBar title="HTML" value={95} />
                    <SkillBar title="CSS" value={95} />
                    <SkillBar title="REACT" value={90} />
                    <SkillBar title="NODE" value={80} />
                    <SkillBar title="TYPESCRIPT" value={70} />
                    <SkillBar title="NEST" value={70} />
                    <SkillBar title="NEXT" value={60} />
                </Box>
            </Box>

            <Box
                component='img'
                src="/pauloPhoto.jpg"
                sx={{
                    height: 400,
                }}
            />
        </Box>
    )
}