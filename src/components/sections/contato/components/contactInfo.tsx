import { Box, Typography } from "@mui/material"
import { IoMailOutline } from "react-icons/io5"
import { HiOutlinePhone } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

export const ContactInfo = () => {
    return (
        <>
            <Box display='flex' alignItems='center' gap={2}>
                <IoMailOutline size={40} />

                <Typography>paulohenriquep2000@gmail.com</Typography>
            </Box>

            <Box display='flex' alignItems='center' gap={2}>
                <HiOutlinePhone  size={40} />

                <Typography>(21) 99241-9980</Typography>
            </Box>

            <Box display='flex' alignItems='center' gap={2}>
                <SlLocationPin  size={40} />

                <Typography>Rio de Janeiro - Brasil</Typography>
            </Box>
        </>
    )
}