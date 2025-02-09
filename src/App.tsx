import './App.css'
import { Appbar } from './components/layout'
import { Contato } from './components/sections/contato/Contato'
import { Experiencias } from './components/sections/experiencias/Experiencias'
import { Sobre } from './components/sections/sobre/Sobre'

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
