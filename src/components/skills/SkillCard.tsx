import { Box, Card, CardContent, Typography } from "@mui/material"

interface Props {
    icon: React.ReactNode;
    name: string;
    main?: boolean;
}

export const SkillCard: React.FC<Props> = ({ icon, name, main }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                bgcolor: 'transparent',
                color: '#FFF',
                width: "15%",
            }}
            elevation={0}
        >

            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Box>
                    {icon}
                </Box>
                <Typography variant="body2">{name}</Typography>
            </CardContent>
        </Card>
    )
}