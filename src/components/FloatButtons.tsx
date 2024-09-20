import { Box, Fab } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useCallback, useEffect, useState } from "react";

export function FloatButtons() {
    const [showScrollToButton, setShowScrollToButton] = useState(false)

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    const handleScroll = useCallback(() => {
        if (window.scrollY > 300) {
            setShowScrollToButton(true)
        } else {
            setShowScrollToButton(false)
        }
    }, [])

    //Monitora o scroll da página
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

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
            {showScrollToButton && (

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
            )}
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