import './App.css'
import { Appbar } from "./components/Appbar"
import { Certificados } from './components/certificados/Certificados'
import { Contato } from './components/Contato'
import { Experiencias } from './components/Experiencias'
import { FloatButtons } from './components/FloatButtons'
import { Sobre } from './components/Sobre'

function App() {

    return (
        <>
            <Appbar />
            <Sobre />
            <Experiencias />
            <Certificados />
            <Contato />
            <FloatButtons />
        </>
    )
}

export default App
