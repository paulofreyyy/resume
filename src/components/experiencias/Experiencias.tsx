import { Box, Divider, Typography } from "@mui/material";
import { ExperienciaItem } from "./ExperienciaItem";

export function Experiencias() {
    return (
        <Box bgcolor='#0B0414' p={{ md: 15, xs: 3 }} py={10} color='#FFF' id='experiencias'>
            <Typography fontSize='2rem' mb={4} fontWeight='bold' align="center">Experiências</Typography>

            <ExperienciaItem
                title="Desenvolvedor Frontend"
                company="Conversu"
                avatarSrc="/conversuLogo.jpeg"
                dates={["Junho 2024", "Setembro 2024"]}
                responsibilities={[
                    "Desenvolvimento e manutenção de aplicações em ReactJS, Styled Components, Chakra UI.",
                    "Desenvolvimento e manutenção de Backend em NestJS.",
                    "Desenvolvimento e Manutenção de Banco de dados PostgreSQL.",
                    "Implementação de componentes em React com TypeScript e integração com APIs.",
                    "Contribuição em decisões de arquitetura e boas práticas de desenvolvimento.",
                    "Criação de APIs RESTful com NestJS para operações CRUD e integração com serviços de terceiros."
                ]}
                defaultExpanded
            />

            <Divider sx={{ bgcolor: '#FFF' }} />

            <ExperienciaItem
                title="Desenvolvedor Backend"
                company="Vortigo Digital"
                avatarSrc="/vortigoLogo.jpeg"
                dates={["Junho 2022", "Novembro 2023"]}
                responsibilities={[
                    "Desenvolvimento de integrações utilizando a plataforma de integrações híbridas (HIP) da Digibee, Power Apps e Mambu para criar APIs.",
                    "Projetar e desenvolver soluções baseadas na plataforma Digibee, Power Apps e Mambu.",
                    "Desenvolvimento de APIs."
                ]}
            />

            <Divider sx={{ bgcolor: '#FFF' }} />

            <ExperienciaItem
                title="Estagiário de Desenvolvimento"
                company="Hashinfo Tecnologia"
                avatarSrc="/hashinfoLogo.jpeg"
                dates={["Dezembro 2021", "Junho 2022"]}
                responsibilities={[
                    "Auxiliar no suporte técnico.",
                    "Desenvolvimento de API.",
                    "Desenvolvimento de aplicações Web e Mobile.",
                    "Vivência com API Rest.",
                    "Neste cargo eu pude colocar em prática todo meu conhecimento em Javascript e Node.js, onde meu primeiro desafio foi estruturar e desenvolver uma plataforma Web para uma empresa de transportes...",
                    "Também como desafio, estruturei e desenvolvi uma API que é consumida por um Aplicativo Mobile..."
                ]}
            />

            <Divider sx={{ bgcolor: '#FFF' }} />

            <ExperienciaItem
                title="Estagiário de Desenvolvimento"
                company="Winsiga Sistemas"
                avatarSrc="/winsigaLogo.jpeg"
                dates={["Maio 2021", "Novembro 2021"]}
                responsibilities={[
                    "Auxiliar na instalação de programas;",
                    "Auxiliar na execução de QUERIES SQL server;",
                    "Prestar suporte aos clientes;",
                    "Desenvolvimento de aplicações Web utilizando ASP.NET CORE e Entity framework;",
                    "Desenvolvimento de melhorias para o Sistema ERP utilizando .NET;",
                    "Desenvolvimento de Dashboards e BI com ferramenta MyBi;",
                    "Apresentação de novas funcionalidades e ferramentas para clientes."
                ]}
            />
        </Box>
    );
}
