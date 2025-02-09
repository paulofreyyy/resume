import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Chip, List, ListItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface ExperienciaItemProps {
    title: string;
    company: string;
    avatarSrc: string;
    dates: string[];
    responsibilities: string[];
    defaultExpanded?: boolean;
}

export const ExperienciaItem: React.FC<ExperienciaItemProps> = ({ title, company, avatarSrc, dates, responsibilities, defaultExpanded }) => {
    return (
        <Accordion sx={{ bgcolor: 'transparent', color: '#FFF' }} defaultExpanded={defaultExpanded}>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{ color: "#FFF" }} />}>
                <Avatar src={avatarSrc} sx={{ width: 48, height: 48 }} />
                <Box ml={2}>
                    <Typography fontSize={{ md: '1.2rem', xs: '0.8rem' }} display='flex' flexDirection='row' gap={1} alignItems='center'>
                        {title}
                    </Typography>
                    <Typography
                        component='span'
                        fontSize={{ md: '1.2rem', xs: '0.8rem' }}
                        sx={{
                            background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                            backgroundClip: "text",
                            WebkitBackgroundClip: 'text',
                            fontWeight: '700',
                            color: 'transparent',
                        }}
                    >
                        {company}
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2" display='flex' gap={2}>
                    {dates.map((date, index) => (
                        <Chip key={index} label={date} sx={{ bgcolor: '#C5C5C5' }} />
                    ))}
                </Typography>
                <Typography fontSize={{ md: '1.2rem', xs: '0.8rem' }} color="#C5C5C5">
                    <List>
                        {responsibilities.map((responsibility, index) => (
                            <ListItem key={index}>{responsibility}</ListItem>
                        ))}
                    </List>
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};
