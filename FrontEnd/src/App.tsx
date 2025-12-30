import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './web/pages/Login';
import Signup from "./web/pages/Signup";
import ForgotPassword from "./web/pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
