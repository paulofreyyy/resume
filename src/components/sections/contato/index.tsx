import { Box, Divider, TextField, Typography, IconButton, Tooltip } from '@mui/material';
import { useForm } from 'react-hook-form'
import { ContactInfo } from './components/contactInfo';
import emailjs from '@emailjs/browser';
import { IoIosSend } from "react-icons/io";


interface FormData {
    email: string;
    nome: string;
    telefone: string;
    mensagem: string;
}
export function Contato() {
    const { handleSubmit, register, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            await emailjs.send(
                'service_5y2xreq',
                'template_g9usqek',
                {
                    from_name: data.nome,
                    from_email: data.email,
                    telefone: data.telefone,
                    message: data.mensagem,
                },
                'Jj5Wrp0RsBF0vsuQZ'
            );
        } catch (error) {
            console.log(error)
        }
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

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <Box display='flex' flexDirection='column' width='100%' gap={2} position='relative'>
                    <TextField
                        label='Email'
                        placeholder='Digite seu email'
                        variant='standard'
                        fullWidth
                        {...register('email', { required: 'O email é obrigatório' })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        type='email'
                    />
                    <TextField
                        label='Nome'
                        placeholder='Digite seu nome'
                        variant='standard'
                        fullWidth
                        {...register('nome', { required: 'O Nome é obrigatório' })}
                        error={!!errors.nome}
                        helperText={errors.nome?.message}
                        type='text'
                    />
                    <TextField
                        label='Telefone'
                        placeholder='Digite seu telefone'
                        variant='standard'
                        fullWidth
                        {...register('telefone', { required: 'O telefone é obrigatório' })}
                        error={!!errors.telefone}
                        helperText={errors.telefone?.message}
                        type='text'
                    />
                    <TextField
                        label='Mensagem'
                        placeholder='Digite sua mensagem'
                        variant='standard'
                        fullWidth
                        multiline
                        rows={4}
                        {...register('mensagem')}
                        type='text'
                    />

                    {/* Botão submit */}
                    <Tooltip title='Enviar' arrow>
                        <IconButton
                            type='submit'
                            sx={{
                                bgcolor: 'rgb(145, 145, 145)',
                                color: '#FFF',
                                width: 60,
                                height: 60,
                                position: 'absolute',
                                bottom: -20,
                                right: -40,
                                "&:hover": {
                                    bgcolor: 'rgb(104, 104, 104)',
                                }
                            }}
                        >
                            <IoIosSend size={30} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </form>
        </Box>
    );
}
