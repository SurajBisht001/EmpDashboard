import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import EmployeeProvider from "./context/EmployeeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <EmployeeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </EmployeeProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
)

