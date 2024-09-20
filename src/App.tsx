import './App.css'
import { Appbar } from "./components/Appbar"
import { Certificados } from './components/Certificados'
import { Contato } from './components/Contato'
import { Experiencias } from './components/Experiencias'
import { Sobre } from './components/Sobre'

function App() {
    return (
        <>
            <Appbar />
            <Sobre />
            <Experiencias />
            <Certificados />
            <Contato />
        </>
    )
}

export default App
