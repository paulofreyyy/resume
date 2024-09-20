import './App.css'
import { Appbar } from "./components/menu/Appbar"
import { Certificados } from './components/certificados/Certificados'
import { Contato } from './components/contato/Contato'
import { Experiencias } from './components/experiencias/Experiencias'
import { FloatButtons } from './components/FloatButtons'
import { Sobre } from './components/sobre/Sobre'

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
