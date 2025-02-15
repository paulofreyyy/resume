export const typographyAnimation =(delay: number) => ({
    initial: { x: 50, opacity: 0, scale: 0.9 },
    whileInView: { x: 0, opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: {
        delay: delay,
        duration: 0.8,
        ease: "easeOut",
    },
})