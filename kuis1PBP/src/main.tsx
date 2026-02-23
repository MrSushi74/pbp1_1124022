
import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from "react"
import {AppRoutes} from "./AppRoutes.tsx";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    </StrictMode>
)
