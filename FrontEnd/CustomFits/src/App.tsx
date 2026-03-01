import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css'
import ForgotPassword from './pages/ForgotPassword'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Signup from './pages/Signup'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Layout><HomePage /></Layout>} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
