import { MenuItem, Typography } from "@mui/material";

interface Props {
    label: string;
    onClick: (e: any) => void;
    href: string
}
export const MenuItemLink: React.FC<Props> = ({ label, onClick, href }) => (
    <MenuItem onClick={onClick}>
        <Typography
            textAlign='center'
            component={href ? 'a' : 'span'}
            href={href}
            target={href ? "_blank" : undefined}
            sx={{
                textDecoration: "none",
                color: "#FFF",
            }}
        >
            {label}
        </Typography>
    </MenuItem>
);