import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import Layout from "./components/layout/Layout";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
