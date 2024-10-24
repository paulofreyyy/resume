import { Accordion, AccordionSummary, Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import { SkillCard } from "./SkillCard";
import { FaAws, FaCss3Alt, FaDocker, FaFigma, FaGitAlt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiChakraui, SiJira, SiMui, SiMysql, SiNestjs } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { PiFileCSharp, PiFileSql } from "react-icons/pi";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Skills = () => {
    const theme = useTheme();
    // Verifica se a tela é grande (lg e acima)
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Box p={{ md: 15, xs: 3 }} py={10} id='skills'>
            <Box textAlign='center'>
                <Typography
                    fontSize='2rem'
                    mb={4}
                    fontWeight='bold'
                    align="center"
                    color="#FFF"
                >
                    Minhas Skills
                </Typography>
            </Box>

            <Box>
                {/* Principais tecnologias */}
                <Box mb={5}>
                    <Accordion sx={{ bgcolor: 'transparent', color: '#FFF' }} defaultExpanded={true} elevation={0}>
                        <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{ color: "#FFF" }} />}>
                            <Typography variant="h6" color="#FFF" mb={2}>Principais tecnologias</Typography>
                        </AccordionSummary>
                        <Box color="#FFF" display='flex' justifyContent='space-around' alignItems='center' flexWrap='wrap' gap={{ md: 5, sm: 2, xs: 1 }}>
                            <SkillCard
                                icon={
                                    <FaNodeJs size='40px' />
                                }
                                name="Node.js"

                            />
                            <SkillCard
                                icon={
                                    <FaReact size='40px' />
                                }
                                name="React.js"

                            />
                            <SkillCard
                                icon={
                                    <FaHtml5 size='40px' />
                                }
                                name="HTML"

                            />
                            <SkillCard
                                icon={
                                    <FaCss3Alt size='40px' />
                                }
                                name="CSS"

                            />
                            <SkillCard
                                icon={
                                    <RiJavascriptFill size='40px' />
                                }
                                name="Javascript"

                            />
                        </Box>
                    </Accordion>

                </Box>

                {/* Outras tecnologias */}
                <Box>   
                    <Accordion sx={{ bgcolor: 'transparent', color: '#FFF' }} defaultExpanded={isLargeScreen} elevation={0}>
                        <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{ color: "#FFF" }} />}>
                            <Typography variant="h6" color="#FFF" mb={2}>Outras tecnologias</Typography>
                        </AccordionSummary>
                        <Box color="#FFF" display='flex' justifyContent='space-around' alignItems='center' flexWrap='wrap' gap={{ md: 5, sm: 2, xs: 1 }}>
                            <SkillCard
                                icon={
                                    <BiLogoTypescript size='40px' />
                                }
                                name="Typescript"
                            />
                            <SkillCard
                                icon={
                                    <SiNestjs size='40px' />
                                }
                                name="NestJS"
                            />
                            <SkillCard
                                icon={
                                    <RiJavascriptFill size='40px' />
                                }
                                name="ExpressJS"
                            />
                            <SkillCard
                                icon={
                                    <RiNextjsLine size='40px' />
                                }
                                name="NextJS"
                            />
                            <SkillCard
                                icon={
                                    <RiTailwindCssFill size='40px' />
                                }
                                name="Tailwind CSS"
                            />
                            <SkillCard
                                icon={
                                    <SiMui size='40px' />
                                }
                                name="Material UI"
                            />
                            <SkillCard
                                icon={
                                    <SiChakraui size='40px' />
                                }
                                name="Chakra UI"
                            />
                            <SkillCard
                                icon={
                                    <AiOutlineDotNet size='40px' />
                                }
                                name=".NET"
                            />
                            <SkillCard
                                icon={
                                    <PiFileCSharp size='40px' />
                                }
                                name="C#"
                            />
                            <SkillCard
                                icon={
                                    <BiLogoPostgresql size='40px' />
                                }
                                name="PostgreSQL"
                            />
                            <SkillCard
                                icon={
                                    <SiMysql size='40px' />
                                }
                                name="MySQL"
                            />
                            <SkillCard
                                icon={
                                    <PiFileSql size='40px' />
                                }
                                name="SQL Server"
                            />
                            <SkillCard
                                icon={
                                    <FaGitAlt size='40px' />
                                }
                                name="Git"
                            />
                            <SkillCard
                                icon={
                                    <FaDocker size='40px' />
                                }
                                name="Docker"
                            />
                            <SkillCard
                                icon={
                                    <FaAws size='40px' />
                                }
                                name="AWS"
                            />
                            <SkillCard
                                icon={
                                    <FaFigma size='40px' />
                                }
                                name="Figma"
                            />
                            <SkillCard
                                icon={
                                    <SiJira size='40px' />
                                }
                                name="Jira"
                            />
                        </Box>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    )
}