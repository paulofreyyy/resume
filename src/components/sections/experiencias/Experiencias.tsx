import { Box, Divider, Typography } from "@mui/material";
import { ExperienciaItem } from "./ExperienciaItem";

export function Experiencias() {
    return (
        <Box
            bgcolor='#000'
            p={{ md: 15, xs: 3 }}
            py={10}
            color='#FFF'
            id='experiencias'
        // sx={{
        //     backgroundImage: 'url(/background.png)',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        // }}
        >
            <Typography fontSize='2rem' mb={4} fontWeight='bold' align="center">Minha Carreira</Typography>

            <ExperienciaItem
                title="Analista de Implantação / QA"
                company="Conversu"
                avatarSrc="/conversuLogo.jpeg"
                dates={["Outubro 2024", "Atualmente"]}
                responsibilities={[]}
                defaultExpanded
            />

            <Divider sx={{ bgcolor: '#FFF' }} />

            <ExperienciaItem
                title="Desenvolvedor Fullstack"
                company="Workingtech"
                avatarSrc="/workingtechLogo.png"
                dates={["Outubro 2024", "Atualmente"]}
                responsibilities={[
                    "Na Workintech, atuei como desenvolvedor fullstack, contribuindo para o desenvolvimento e manutenção de aplicações em um ambiente dinâmico e colaborativo. Minhas principais responsabilidades incluíram:",
                    "- Desenvolver interfaces de usuário interativas e responsivas utilizando frameworks modernos como React.",
                    "- Criar e manter APIs RESTful e GraphQL com autenticação e autorização utilizando Node.js e NestJS.",
                    "- Gerenciar a integração entre serviços e bibliotecas de terceiros (APIs externas, pagamento, envio de emails, etc.).",
                    "- Garantir a entrega contínua de funcionalidades com pipelines de CI/CD e deploys automatizados.",
                    "- Colaborar com designers e stakeholders na definição de requisitos e experiência do usuário (UX/UI).",
                    "- Otimizar a performance e escalabilidade de aplicações web, monitorando logs e métricas.",
                    "- Frontend: React, Next.js, Angular, HTML5, CSS3, JavaScript (ES6+), TypeScript, Material UI, TailwindCSS, Bootstrap.",
                    "- Backend: Node.js, NestJS, Express, TypeScript",
                    "- Banco de dados: PostgreSQL, MongoDB, MySQL, Firebase.",
                    "- Outras ferramentras: Docker, Git, GitHub, CI/CD, Heroku, Jira, Figma, Postman, GraphQL, RESTful APIs.",
                ]}
                defaultExpanded
            />

            <Divider sx={{ bgcolor: '#FFF' }} />

            <ExperienciaItem
                title="Desenvolvedor Fullstack"
                company="Conversu"
                avatarSrc="/conversuLogo.jpeg"
                dates={["Junho 2024", "Setembro 2024"]}
                responsibilities={[
                    "Na Conversu, atuei como desenvolvedor fullstack, contribuindo para o desenvolvimento e manutenção de aplicações em um ambiente dinâmico e colaborativo. Minhas principais responsabilidades incluíram:",
                    "- Frontend: Desenvolvimento e manutenção de aplicações em ReactJS, Styled Components e Chakra UI, criando componentes reutilizáveis.",
                    "- Backend: Desenvolvimento de APIs RESTful com NestJS para operações CRUD e integração com serviços externos.",
                    "- Banco de Dados: Gestão de bancos de dados PostgreSQL, assegurando a integridade e segurança dos dados.",
                    "- Integração: Criação de componentes em React com TypeScript, integrando com APIs para melhorar a funcionalidade das aplicações.",
                    "- Arquitetura: Contribuição em decisões arquiteturais e boas práticas de desenvolvimento.",
                ]}
            />

            <Divider sx={{ bgcolor: '#FFF' }} />

            <ExperienciaItem
                title="Desenvolvedor Backend"
                company="Vortigo Digital"
                avatarSrc="/vortigoLogo.jpeg"
                dates={["Junho 2022", "Novembro 2023"]}
                responsibilities={[
                    "Na Vortigo, fui responsável pelo desenvolvimento do projeto inovador 'Gerenciador de Ativos', que começou como um estudo pessoal e se transformou em um produto valioso para a empresa. Este projeto revolucionou o controle interno de equipamentos fornecidos aos colaboradores, como notebooks e monitores, através de um sistema de QR code. Ao ser escaneado, o QR code exibia informações detalhadas do ativo, incluindo dados de compra, histórico de manutenção e responsáveis, otimizando significativamente a gestão de recursos e melhorando a eficiência operacional.",
                    "Além disso, atuei em estreita colaboração com a equipe de Design, onde utilizei minha capacidade analítica para conduzir pesquisas com usuários e desenhar soluções intuitivas e eficazes. Minha colaboração com diferentes setores resultou em melhorias notáveis nas operações diárias, através da implementação de automações que elevaram a produtividade da equipe.",
                    "Durante meu tempo na Vortigo, trabalhei em um ambiente ágil utilizando metodologias Scrum, o que me permitiu adaptar rapidamente às necessidades do projeto e garantir entregas de alta qualidade.",
                    "Minhas principais responsabilidades incluíram:",
                    "- Integrações: Desenvolvimento de integrações robustas utilizando a plataforma de integrações híbridas (HIP) da Digibee, Power Apps e Mambu para criar APIs eficientes e escaláveis.",
                    "- Soluções: Projetar e desenvolver soluções personalizadas que atendem às necessidades específicas da empresa, assegurando a funcionalidade e eficiência das aplicações.",
                    "- APIs: Criação de APIs inovadoras, facilitando a comunicação entre diferentes sistemas e aprimorando a experiência do usuário."
                ]}
            />

            <Divider sx={{ bgcolor: '#FFF' }} />

            <ExperienciaItem
                title="Estagiário de Desenvolvimento"
                company="Hashinfo Tecnologia"
                avatarSrc="/hashinfoLogo.jpeg"
                dates={["Dezembro 2021", "Junho 2022"]}
                responsibilities={[
                    "Na Hashinfo, atuei como desenvolvedor, onde tive a oportunidade de aplicar e expandir meus conhecimentos em React e Node.js em projetos desafiadores e de alta relevância. Minhas principais responsabilidades incluíram:",
                    "- Desenvolvimento de API: Estruturei e desenvolvi uma API robusta que serve como backbone para um aplicativo mobile, assegurando eficiência e escalabilidade. Essa API foi projetada para atender às necessidades específicas dos usuários, proporcionando uma experiência fluida e responsiva.",
                    "- Desenvolvimento de Aplicações Web e Mobile: Fui responsável pelo desenvolvimento de uma plataforma web para uma empresa de transportes, onde enfrentei o desafio de criar uma solução que atendesse a diversos requisitos de negócios. Minha abordagem focada na experiência do usuário resultou em uma aplicação intuitiva e de fácil utilização.",
                    "- Vivência com API REST: Minha experiência com APIs REST me permitiu implementar soluções eficazes que melhoraram a comunicação entre diferentes sistemas e otimizaram processos internos. A criação de APIs foi fundamental para integrar as aplicações web e mobile, garantindo uma troca de dados fluida e confiável.",
                ]}
            />

            <Divider sx={{ bgcolor: '#FFF' }} />

            <ExperienciaItem
                title="Estagiário de Desenvolvimento"
                company="Winsiga Sistemas"
                avatarSrc="/winsigaLogo.jpeg"
                dates={["Maio 2021", "Novembro 2021"]}
                responsibilities={[
                    "Na Winsiga, desempenhei um papel fundamental no suporte e desenvolvimento de soluções tecnológicas que impactaram positivamente os processos da empresa e a experiência dos clientes. Minhas principais responsabilidades incluíram:",
                    "- Suporte Técnico e Instalação: Auxiliei na instalação de programas e prestei suporte a clientes, garantindo que as soluções tecnológicas fossem implementadas de maneira eficiente e que os usuários tivessem a assistência necessária para maximizar seu uso.",
                    "- Execução de Consultas SQL: Contribuí para a análise de dados e a otimização de processos executando consultas SQL no SQL Server, facilitando a extração de informações cruciais para a tomada de decisões.",
                    "- Desenvolvimento de Aplicações Web: Utilize ASP.NET Core e Entity Framework para desenvolver aplicações web, criando soluções escaláveis e de alto desempenho que atendiam às necessidades específicas dos negócios.",
                    "- Melhorias no Sistema ERP: Fui responsável por implementar melhorias no Sistema ERP utilizando .NET, aprimorando a funcionalidade e a eficiência do sistema, o que resultou em um aumento na produtividade dos usuários.",
                    "- Desenvolvimento de Dashboards e BI: Desenvolvi dashboards e relatórios de Business Intelligence (BI) com a ferramenta MyBi, permitindo que os clientes visualizassem dados de forma clara e tomassem decisões baseadas em informações precisas.",
                    "- Apresentação de Funcionalidades: Apresentei novas funcionalidades e ferramentas para os clientes, demonstrando como as soluções implementadas poderiam melhorar seus processos e aumentar a eficiência operacional.",
                ]}
            />
        </Box>
    );
}
