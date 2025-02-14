import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'standard',
                fullWidth: true,
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#FFF !important',
                    borderRadius: '15px !important',
                    padding: '8px !important',
                    '& .MuiInputBase-input': {
                        color: 'black !important',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'black !important',
                        marginLeft: '8px !important',
                    },
                    '& .MuiInput-underline:before': {
                        borderBottom: 'none !important',
                    },
                    '& .MuiInput-underline:hover:before': {
                        borderBottom: 'none !important',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottom: 'none !important',
                    },
                }
            }
        }
    }
});

export default theme;
