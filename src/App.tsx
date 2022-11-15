import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditForm from "./pages/EditForm";
import Pembayaran from "./pages/Pembayaran";
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
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/edit" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
