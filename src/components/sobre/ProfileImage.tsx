import { Box } from "@mui/material";

interface ProfileImageProps {
    src: string;
}

export function ProfileImage({ src }: ProfileImageProps) {
    return (
        <Box
            component="img"
            src={src}
            sx={{
                height: 200,
                width: 200,
                objectFit: 'cover',
                borderRadius: '100%',
            }}
        />
    );
}
