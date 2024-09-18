import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Chip, Divider, List, ListItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function Experiencias() {
    return (
        <Box bgcolor='#0B0414' p={15} color='#FFF' mt={10}>
            <Typography variant="h4" mb={4}>Experiências</Typography>

            <Accordion defaultExpanded sx={{ bgcolor: 'transparent', color: '#FFF' }}>
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon sx={{ color: "#FFF" }} />}
                >
                    <Typography variant="h6" display='flex' flexDirection='row' gap={1} alignItems='center'>
                        <Avatar src="/conversuLogo.jpeg" sx={{ width: 48, height: 48 }} />
                        Desenvolvedor Frontend -
                        <Box
                            component='span'
                            sx={{
                                background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                                backgroundClip: "text",
                                WebkitBackgroundClip: 'text',
                                fontWeight: '700',
                                color: 'transparent',
                            }}
                        >
                            Conversu
                        </Box>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography variant="body2" display='flex' gap={2}>
                        <Chip label='Junho 2024' sx={{ bgcolor: '#C5C5C5' }} />
                        <Chip label='Setembro 2024' sx={{ bgcolor: '#C5C5C5' }} />
                    </Typography>

                    <Typography variant="body1" color="#C5C5C5">
                        <List>
                            <ListItem>- Desenvolvimento e manutenção de aplicações em ReactJS, Styled Components, Chakra UI.</ListItem>
                            <ListItem>- Desenvolvimento e manutenção de Backend em NestJS.</ListItem>
                            <ListItem>- Desenvolvimento e Manutenção de Banco de dados PostgreSQL.</ListItem>
                            <ListItem>- Implementação de componentes em React com TypeScript e integração com APIs.</ListItem>
                            <ListItem>- Contribuição em decisões de arquitetura e boas práticas de desenvolvimento.</ListItem>
                            <ListItem>- Criação de APIs RESTful com NestJS para operações CRUD e integração com serviços de terceiros.</ListItem>
                        </List>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Divider sx={{ bgcolor: '#FFF' }} />

            <Accordion sx={{ bgcolor: 'transparent', color: '#FFF' }}>
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon sx={{ color: "#FFF" }} />}
                >
                    <Typography variant="h6" display='flex' flexDirection='row' gap={1} alignItems='center'>
                        <Avatar src="/vortigoLogo.jpeg" sx={{ width: 48, height: 48 }} />
                        Desenvolvedor Backend -
                        <Box
                            component='span'
                            sx={{
                                background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                                backgroundClip: "text",
                                WebkitBackgroundClip: 'text',
                                fontWeight: '700',
                                color: 'transparent',
                                ml: 1
                            }}
                        >
                            Vortigo Digital
                        </Box>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography variant="body2" display='flex' gap={2}>
                        <Chip label='Junho 2022' sx={{ bgcolor: '#C5C5C5' }} />
                        <Chip label='Novembro 2023' sx={{ bgcolor: '#C5C5C5' }} />
                    </Typography>

                    <Typography variant="body1" color="#C5C5C5">
                        <List>
                            <ListItem>- Desenvolvimento de integrações utilizando a plataforma de integrações híbridas (HIP) da Digibee, Power Apps e Mambu para criar APIs.</ListItem>
                            <ListItem>- Projetar e desenvolver soluções baseadas na plataforma Digibee, Power Apps e Mambu.</ListItem>
                            <ListItem>- Desenvolvimento de APIs.</ListItem>
                        </List>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Divider sx={{ bgcolor: '#FFF' }} />

            <Accordion sx={{ bgcolor: 'transparent', color: '#FFF' }}>
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon sx={{ color: "#FFF" }} />}
                >
                    <Typography variant="h6" display='flex' flexDirection='row' gap={1} alignItems='center'>
                        <Avatar src="/hashinfoLogo.jpeg" sx={{ width: 48, height: 48 }} />
                        Estagiário de Desenvolvimento -
                        <Box
                            component='span'
                            sx={{
                                background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                                backgroundClip: "text",
                                WebkitBackgroundClip: 'text',
                                fontWeight: '700',
                                color: 'transparent',
                                ml: 1
                            }}
                        >
                            Hashinfo Tecnologia
                        </Box>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography variant="body2" display='flex' gap={2}>
                        <Chip label='Dezembro 2021' sx={{ bgcolor: '#C5C5C5' }} />
                        <Chip label='Junho 2022' sx={{ bgcolor: '#C5C5C5' }} />
                    </Typography>

                    <Typography variant="body1" color="#C5C5C5">
                        <List>
                            <ListItem>- Auxiliar no suporte técnico.</ListItem>
                            <ListItem>- Desenvolvimento de API.</ListItem>
                            <ListItem>- Desenvolvimento de aplicações Web e Mobile.</ListItem>
                            <ListItem>- Vivência com API Rest.</ListItem>
                        </List>
                        Neste cargo eu pude colocar em prática todo meu conhecimento em Javascript e Node.js, onde meu primeiro desafio foi estruturar e desenvolver uma plataforma Web para uma empresa de transportes (Projeto que pode ser visto na seção "Projetos" em meu Linkedin), como responsável deste projeto eu desenvolvi rotinas de login e autenticação, utilizando o padrão JWT, cadastro de empresas e suas filiais, download e upload de arquivos, rotina de Checklist para os motoristas cadastrados, estes funcionam como uma espécie de "prova" para os mesmos, sendo aplicadas diariamente ou mensalmente.
                        <br /><br />
                        Também como desafio, estruturei e desenvolvi uma API que é consumida por um Aplicativo Mobile, esta tendo como objetivo realizar a comunicação entre o APP e a Plataforma WEB, sendo possível enviar e receber arquivos, realizar Checklists e consultar os já realizados, entre outras funções...

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Divider sx={{ bgcolor: '#FFF' }} />

            <Accordion sx={{ bgcolor: 'transparent', color: '#FFF' }}>
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon sx={{ color: "#FFF" }} />}
                >
                    <Typography variant="h6" display='flex' flexDirection='row' gap={1} alignItems='center'>
                        <Avatar src="/winsigaLogo.jpeg" sx={{ width: 48, height: 48 }} />
                        Estagiário de Desenvolvimento -
                        <Box
                            component='span'
                            sx={{
                                background: 'linear-gradient(90deg, #FF8660, #9A33FF)',
                                backgroundClip: "text",
                                WebkitBackgroundClip: 'text',
                                fontWeight: '700',
                                color: 'transparent',
                                ml: 1
                            }}
                        >
                            Winsiga Sistemas
                        </Box>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography variant="body2" display='flex' gap={2}>
                        <Chip label='Maio 2021' sx={{ bgcolor: '#C5C5C5' }} />
                        <Chip label='Novembro 2021' sx={{ bgcolor: '#C5C5C5' }} />
                    </Typography>

                    <Typography variant="body1" color="#C5C5C5">
                        <List>
                            <ListItem>- Auxiliar na instalação de programas;</ListItem>
                            <ListItem>- Auxiliar na execução de QUERIES SQL server;</ListItem>
                            <ListItem>- Prestar suporte aos clientes;</ListItem>
                            <ListItem>- Desenvolvimento de aplicações Web utilizando ASP.NET CORE e Entity framework;</ListItem>
                            <ListItem>- Desenvolvimento de melhorias para o Sistema ERP utilizando .NET;</ListItem>
                            <ListItem>- Desenvolvimento de Dashboards e BI com ferramenta MyBi;</ListItem>
                            <ListItem>- Apresentação de novas funcionalidades e ferramentas para clientes.</ListItem>
                        </List>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}