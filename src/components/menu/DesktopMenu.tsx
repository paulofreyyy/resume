import { MenuItemLink } from "./MenuItemLink";

interface DesktopMenuProps {
    scrollSmooth: (id: string) => void;
    handleMenuClose: () => void;
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ scrollSmooth, handleMenuClose }) => (
    <>
        <MenuItemLink label="Projetos" onClick={handleMenuClose} href="https://github.com/paulofreyyy" />
        <MenuItemLink label="Experiências" onClick={() => { scrollSmooth('experiencias'); }} href="" />
        <MenuItemLink label="Certificados" onClick={() => { scrollSmooth('certificados'); }} href="" />
        <MenuItemLink label="Contato" onClick={() => { scrollSmooth('contato'); }} href="" />
    </>
);
