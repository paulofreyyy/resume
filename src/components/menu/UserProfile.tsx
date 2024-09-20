import { Avatar, Box, Typography } from "@mui/material";

export const UserProfile = () => (
    <Box display='flex' alignItems='center' gap={2}>
        <Avatar src="/pauloPhoto.jpg" />
        <Box display='flex' flexDirection='column' alignItems='start'>
            <Typography textAlign='center' variant="body2">
                Paulo Henrique Pereira
            </Typography>
            <Typography
                textAlign='center'
                variant="body2"
                sx={{
                    background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                    backgroundClip: "text",
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: "600",
                }}
            >
                Desenvolvedor Fullstack
            </Typography>
        </Box>
    </Box>
);