import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {UContextProvider} from "./context/UserContext.jsx";
import {TContextProvider} from "./context/TaskContext.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>

            <UContextProvider>
                <TContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </TContextProvider>
            </UContextProvider>
    </StrictMode>


)
