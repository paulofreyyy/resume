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
                borderRadius: "15px",
                color: '#FFF',
                width: { md: '15%', sm: '50%', xs: '45%' },
            }}
            elevation={0}
        >

            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Box>
                    {icon}
                </Box>
                <Typography variant="body2" noWrap>{name}</Typography>
            </CardContent>
        </Card>
    )
}