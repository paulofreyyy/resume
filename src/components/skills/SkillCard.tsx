import { Box, Card, CardContent, Typography } from "@mui/material"

interface Props {
    icon: React.ReactNode;
    name: string;
}

export const SkillCard: React.FC<Props> = ({ icon, name }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                bgcolor: 'transparent',
                color: '#FFF',
                // border: '1px solid #FFF',
                width: "15%",
            }}
            elevation={0}
        >

            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                {/* <Box component='img' src={`/icons/${icon}.svg`} width={40} height={40} /> */}
                <Box>
                    {icon}
                </Box>
                <Typography variant="body2">{name}</Typography>
            </CardContent>
        </Card>
    )
}