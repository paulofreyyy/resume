import './App.css'
import { Appbar } from "./components/Appbar"
import { Contato } from './components/Contato'
import { Sobre } from './components/Sobre'

function App() {
    return (
        <>
            <Appbar />
            <Sobre />
            <Contato />
        </>
    )
}

export default App
