import { Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface ContatoIconProps {
    type: 'email' | 'linkedin' | 'github' | 'whatsapp';
}

export const ContatoIcon: React.FC<ContatoIconProps> = ({ type }) => {
    const icons = {
        email: <MailOutlineIcon />,
        linkedin: (
            <Typography
                component='a'
                href='https://www.linkedin.com/in/paulo-pqueiroz/'
                target='_blank'
                sx={{
                    textDecoration: "none",
                    color: "#fff",
                }}
            >
                <LinkedInIcon fontSize='large' />
            </Typography>
        ),
        github: (
            <Typography
                component='a'
                href='https://github.com/paulofreyyy'
                target='_blank'
                sx={{
                    textDecoration: "none",
                    color: "#fff",
                }}
            >
                <GitHubIcon fontSize='large' />
            </Typography>
        ),
        whatsapp: (
            <Typography
                component='a'
                href='https://api.whatsapp.com/send/?phone=5521992419980'
                target='_blank'
                sx={{
                    textDecoration: "none",
                    color: "#fff",
                }}
            >
                <WhatsAppIcon fontSize='large' />
            </Typography>
        ),
    };

    return type === 'email' ? (
        <>{icons.email}</>
    ) : (
        <>{icons[type]}</>
    );
};
