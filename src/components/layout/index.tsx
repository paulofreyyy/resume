import { AppBar, Container, Box, Typography } from "@mui/material";
import { FaCode } from "react-icons/fa";

export function Appbar() {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: '90px',
            }}
        >
            <Container maxWidth="xl" sx={{ display: { md: "flex" }, alignItems: 'center', justifyContent: 'center' }}>
                <Box display='flex' alignItems='center' justifyContent='space-between' width='100%' px={3}>
                    <Box display='flex' alignItems='center' gap={2}>
                        <FaCode size={30} />
                        <Typography textAlign='center' variant="h6" fontWeight={600}>
                            PAULO FREY
                        </Typography>
                    </Box>

                    {/* MenuItens*/}
                    <Box display='flex' alignItems='center' gap={10}>
                        <Typography fontSize='0.9rem'>SOBRE MIM</Typography>
                        <Typography fontSize='0.9rem'>PORTIFOLIO</Typography>
                        <Typography fontSize='0.9rem'>CARREIRA</Typography>
                    </Box>
                </Box>
            </Container>
        </AppBar >
    )
}