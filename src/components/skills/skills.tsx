import { Box, Card, CardContent, SvgIcon, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
import { TabPanel } from "./TabPanel";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
    const [value, setValue] = useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        sx={{
                            color: "#FFF",
                        }}
                    >
                        <Tab label="Principais Tecnologias" value={1} />
                        <Tab label="Backend" value={2} />
                        <Tab label="Frontend" value={3} />
                        <Tab label="Outras" value={4} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={1}>
                    <Box color="#FFF" display='flex' justifyContent='space-around' alignItems='center'>
                        <SkillCard icon="node" name="Node.js" />
                    </Box>
                </TabPanel>
            </Box>
        </Box>
    )
}