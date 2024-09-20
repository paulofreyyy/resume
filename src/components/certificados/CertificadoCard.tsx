import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

interface CertificadoCardProps {
    title: string;
    date: string;
    issuer: string;
    image: string;
    link: string;
}

export const CertificadoCard: React.FC<CertificadoCardProps> = ({ title, date, issuer, image, link }) => (
    <Card sx={{ width: 345, bgcolor: '#0B0414', color: '#C5C5C5' }}>
        <CardActionArea LinkComponent='a' href={link} target="_blank">
            <CardMedia component='img' height={140} image={image} />
            <CardContent>
                <Typography variant="h6" color="#fff" noWrap>{title}</Typography>
                <Typography variant="body2">{date}</Typography>
                <Typography variant="body1">{issuer}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);
