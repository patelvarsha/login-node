import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LogInFolder";
import RegisterPage from "./components/RegisterFolder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
