import './App.css'
import { Appbar } from './components/layout'
import { Contato } from './components/sections/contato'
import { Experiencias } from './components/sections/experiencias'
import { Main } from './components/sections/main'
import { Portifolio } from './components/sections/portifolio'
import { SobreMim } from './components/sections/sobre'

function App() {
    return (
        <Appbar>
            <Main />
            <SobreMim />
            <Experiencias />
            <Portifolio />
            <Contato />
        </Appbar>
    )
}

export default App
