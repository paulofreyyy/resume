import { Box } from "@mui/material"
import { SkillBar } from "./components/skillBar"
import { AnimatedTypography } from "../../animations/TypographyAnimated"
import { typographyAnimation } from "../../../utils/animations"
import { motion } from "framer-motion"

const Skills = [
    { title: "JAVASCRIPT", value: 95 },
    { title: "HTML", value: 95 },
    { title: "CSS", value: 95 },
    { title: "REACT", value: 90 },
    { title: "NODE", value: 80 },
    { title: "TYPESCRIPT", value: 70 },
    { title: "NEST", value: 70 },
    { title: "NEXT", value: 60 },
]

export const SobreMim = () => {
    return (
        <Box
            id="sobre"
            height='100vh'
            color='#FFF'
            bgcolor='#000'
            px={20}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            position={'relative'}
        >
            <Box width='60%' height='fit-content'>
                <AnimatedTypography variant="h3" animation={typographyAnimation(0.4)} fontWeight={600}>DESENVOLVEDOR</AnimatedTypography>
                <AnimatedTypography animation={typographyAnimation(0.6)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt itaque doloremque molestias, eius minus tenetur molestiae,
                    temporibus facere dicta corrupti aperiam quisquam dolor, non aliquam cumque. Eius, quos eveniet.
                </AnimatedTypography>

                {/* Skills */}
                <Box mt={4}
                    display='flex'
                    flexDirection='column'
                    gap={1}
                    width='50%'
                >
                    {Skills.map((item, index) => (
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: { delay: index * 0.15, duration: 0.6, ease: "easeOut" }
                            }}
                            viewport={{ once: true }}
                        >
                            <SkillBar key={index} title={item.title} value={item.value} />
                        </motion.div>
                    ))}
                </Box>
            </Box>

            <Box
                component={motion.img}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                }}
                viewport={{ once: true }}
                src="/pauloPhoto.jpg"
                sx={{
                    height: 400,
                    borderRadius: 4
                }}
            />
        </Box>
    )
}