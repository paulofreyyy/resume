import './App.css'
import { Appbar } from './components/layout'
import { Contato } from './components/sections/contato/Contato'
import { Main } from './components/sections/main/Main'
import { SobreMim } from './components/sections/sobre'

function App() {
    return (
        <Appbar>
            <Main />
            <SobreMim />
            <Contato />
        </Appbar>
    )
}

export default App
