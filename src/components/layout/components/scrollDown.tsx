import { Box, Typography } from "@mui/material"
import { FaArrowDown } from "react-icons/fa"

export const ScrollDown = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                color: "#FFF",
                zIndex: 1
            }}
        >
            <Typography>Scroll down</Typography>
            <FaArrowDown size={20} />
        </Box>
    )
}