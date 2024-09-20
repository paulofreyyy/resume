import './App.css'
import { Certificados } from './components/Certificados'
import { Contato } from './components/Contato'
import { Experiencias } from './components/Experiencias'
import { Sobre } from './components/Sobre'

function App() {
    return (
        <>
            <Sobre />
            <Experiencias />
            <Certificados />
            <Contato />
        </>
    )
}

export default App
