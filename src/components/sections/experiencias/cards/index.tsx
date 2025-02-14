import { Box, Chip, Typography } from "@mui/material"
import { motion } from "framer-motion";

interface Props {
    logo: string;
    title: string;
    startDate: string;
    endDate: string;
}

export const CustomCard = ({ logo, title, startDate, endDate }: Props) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
        >
            <Box
                py={8}
                position='relative'
                bgcolor='#3d3d3d'
                borderRadius={5}
                color='#FFF'
                textAlign='center'
                sx={{
                    cursor: 'pointer',
                }}
            >
                <Box
                    position='absolute'
                    component='img'
                    src={`/${logo}`}
                    sx={{
                        top: -30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 75,
                        borderRadius: '100%'
                    }}
                />

                <Box
                    display='flex'
                    flexDirection='column'
                    gap={1}
                >
                    <Typography fontWeight={600} fontSize='1.5rem'>{title}</Typography>
                    <Box display='flex' flexDirection='row' justifyContent='center' gap={2}>
                        <Chip
                            label={startDate}
                            variant="outlined"
                            sx={{
                                borderColor: '#FFF',
                                color: '#FFF'
                            }}
                        />

                        <Chip
                            label={endDate}
                            variant="outlined"
                            sx={{
                                borderColor: '#FFF',
                                color: '#FFF'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}