import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import { UserProvider } from './context/UserContext';
import AuthenticatedRoute from "./routes/AuthenticatedRoute";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/logout" element={<Logout />} />

            <Route element={<AuthenticatedRoute/>}>
              <Route element={<Layout />}>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/profile" element={<Login />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
