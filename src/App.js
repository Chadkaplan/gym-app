import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
};

export default App;