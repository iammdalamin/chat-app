
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Chat from "../src/components/Chat/Chat"
import { getUserDetails } from './helpers/SessionHelper'
import Navbar from './components/Navbar/Navbar'
function App() {
const user = getUserDetails()
  return (
  <>
  <BrowserRouter>
  <Navbar />
        <Routes>
          <Route path='/' element={user? <Chat />: <RegistrationPage />} />
          <Route path="/registration" element={user? <Chat />: <RegistrationPage />} /> 
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat" element={<Chat />} />

          </Routes>
          
          
          
          
          
          
          </BrowserRouter>
  </>
  )
}

export default App
