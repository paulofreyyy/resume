import { Box, Chip, Typography } from "@mui/material"
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
    logo: string;
    title: string;
    startDate: string;
    endDate: string;
}

export const CustomCard = ({ logo, title, startDate, endDate }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: 'relative' }}
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
                    borderRadius: '100%',
                    zIndex: 1,
                    boxShadow: '1px 1px 4px black'
                }}
            />
            <Box
                py={8}
                bgcolor='#3d3d3d'
                borderRadius={5}
                color='#FFF'
                textAlign='center'
                sx={{
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >

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

                {/* Add the overlay */}
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: isHovered ? 0 : '100%' }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: -10,
                        bottom: 0,
                        backgroundColor: '#FFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component='a'
                        href="https://www.linkedin.com/in/paulo-pqueiroz/"
                        target="_blank"
                        sx={{ textDecoration: "none" }}
                    >
                        <Typography variant="h6" color="#3d3d3d" fontWeight={600}>
                            VER DETALHES
                        </Typography>

                    </Box>
                </motion.div>
            </Box>
        </motion.div>
    )
}