import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home/Home.tsx'
import './index.css'
import Character from "./components/Character/Character.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Home/>
        <Character/>
    </StrictMode>,
)
