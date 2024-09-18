import './App.css'
import { Appbar } from "./components/Appbar"
import { Contato } from './components/Contato'
import { Experiencias } from './components/Experiencias'
import { Sobre } from './components/Sobre'

function App() {
    return (
        <>
            <Appbar />
            <Sobre />
            <Experiencias />
            <Contato />
        </>
    )
}

export default App
