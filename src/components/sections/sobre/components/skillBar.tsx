import { Box, LinearProgress, Typography } from "@mui/material"

interface Props {
    title: string;
    value: number
}

export const SkillBar = ({ title, value }: Props) => {
    return (

        <Box sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                }}
            >
                <Box minWidth={550}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        sx={{
                            height: 8,
                            borderRadius: 10,
                            bgcolor: '#747474',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#FFF',
                            },
                        }}
                    />
                </Box>

                <Typography>{title}</Typography>
            </Box>
        </Box>
    )
}