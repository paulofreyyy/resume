import { Box, Card, CardContent, SvgIcon, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
import { TabPanel } from "./TabPanel";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
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
                    Skills
                </Typography>
            </Box>

            <Box>
                <Box>
                    <Typography variant="h6" color="#FFF">Principais tecnologias</Typography>
                    <Box color="#FFF" display='flex' justifyContent='space-around' alignItems='center' flexWrap='wrap' gap={5}>
                        <SkillCard icon="node" name="Node.js" />
                        <SkillCard icon="react" name="React.js" />
                        <SkillCard icon="html" name="HTML" />
                        <SkillCard icon="css" name="CSS" />
                        <SkillCard icon="javascript" name="Javascript" />
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h6" color="#FFF">Outras tecnologias</Typography>
                    <Box color="#FFF" display='flex' justifyContent='space-around' alignItems='center' flexWrap='wrap' gap={5}>
                        <SkillCard icon="node" name="Typescript.js" />
                        <SkillCard icon="react" name="Nest.js" />
                        <SkillCard icon="html" name="Express" />
                        <SkillCard icon="css" name="C#" />
                        <SkillCard icon="javascript" name="Asp.NET Core" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}