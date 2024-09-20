import { Box } from "@mui/material";
import { ProfileImage } from "./ProfileImage";
import { Title } from "./Title";
import { Description } from "./Description";
import { ActionButtons } from "./ActionButtons";

export function Sobre() {
    return (
        <Box
            gap={{ md: 10, xs: 4 }}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 10,
            }}
        >
            <ProfileImage src="/pauloPhoto.jpg" />
            <Title />
            <Description />
            <ActionButtons />
        </Box>
    );
}
