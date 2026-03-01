import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter} from "react-router-dom"
import {App} from "./App.jsx";
import {ThemeContext} from "./components/ThemeContext.jsx";

createRoot(document.getElementById('root')).render(
    <ThemeContext>
        <App/>
    </ThemeContext>

)
