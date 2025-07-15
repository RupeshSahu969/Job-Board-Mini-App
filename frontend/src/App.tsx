import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
    
        <Route path="/applications/:id" element={<ApplyForm />} />
      </Routes>
    </>
  );
}

export default App;
