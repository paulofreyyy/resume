import { Box, Divider, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form'
import { ContactInfo } from './components/contactInfo';


export function Contato() {
    const { handleSubmit, register, formState: { errors } } = useForm<FormData>();

    const onSubmit = (_data: FormData) => {
        console.log('formulário')

    }

    return (
        <Box
            bgcolor='#000'
            color='#fff'
            position='relative'
            display='flex'
            justifyContent="center"
            alignItems="center"
            id='contato'
            px={40}
            height='100vh'
            gap={10}
        >
            <Box width='100%' display='flex' flexDirection='column' gap={4}>
                <Typography variant="h3" fontWeight={600}>FALE COMIGO</Typography>

                <Divider sx={{ height: 2, bgcolor: '#868686', borderRadius: 10 }} />

                <ContactInfo />
            </Box>

            <form action="" onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <Box display='flex' flexDirection='column' width='100%' gap={2}>
                    <TextField
                        label='Email'
                        placeholder='Digite seu email'
                        variant='standard'
                        fullWidth
                        // {...register()}
                        // error={!!errors[]}
                        // helperText={ }
                        type='email'
                    />
                    <TextField
                        label='Nome'
                        placeholder='Digite seu nome'
                        variant='standard'
                        fullWidth
                        // {...register()}
                        // error={!!errors[]}
                        // helperText={ }
                        type='text'
                    />
                    <TextField
                        label='Telefone'
                        placeholder='Digite seu telefone'
                        variant='standard'
                        fullWidth
                        // {...register(field.name as keyof FormData, field.required ? { required: field.required } : {})}
                        // error={!!errors[]}
                        // helperText={ }
                        type='text'
                    />
                    <TextField
                        label='Mensagem'
                        placeholder='Digite sua mensagem'
                        variant='standard'
                        fullWidth
                        multiline
                        rows={4}
                        // {...register()}
                        // error={!!errors[]}
                        // helperText={ }
                        type='text'
                    />
                </Box>
            </form>
        </Box>
    );
}
