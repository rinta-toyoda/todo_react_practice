import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Routes} from "./router";

const Main = () => {
    return (
        <Routes />
    );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
