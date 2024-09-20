import { Box, Fab } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useCallback } from "react";

export function FloatButtons() {
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
    return (
        <Box
            position='fixed'
            bottom={20}
            right={20}
            display='flex'
            flexDirection='column'
            gap={1}
            alignItems='center'
        >
            <Fab
                color='primary'
                size='small'
                sx={{
                    background: 'linear-gradient(90deg, #FF8660, #9A33FF)'
                }}
                onClick={scrollToTop}
            >
                <NavigationIcon />
            </Fab>
            <Fab
                color='success'
                LinkComponent={'a'}
                href='https://api.whatsapp.com/send/?phone=5521992419980'
                target="_blank"
            >
                <WhatsAppIcon />
            </Fab>
        </Box>
    )
}