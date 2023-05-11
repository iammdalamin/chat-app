
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Chat from "../src/components/Chat/Chat"
import { getUserDetails } from './helpers/SessionHelper'
import Navbar from './components/Navbar/Navbar'
import Chat2 from './components/Chat/Chat2'
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
          <Route path="/chat2" element={<Chat2 />} />
          </Routes>
          
          
          
          
          
          
          </BrowserRouter>
  </>
  )
}

export default App
