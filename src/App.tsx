import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pendataan from "./pages/Pendataan";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pendataan" element={<Pendataan />} />
          <Route path="/registrasi" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
