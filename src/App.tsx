import React from "react";
import Country from "./pages/country"
import {BrowserRouter as Router, Route, Routes}from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function App() {
  return (
        <Router>
          <Routes>
            <Route path="/home" element={<Country/>}/>
          </Routes>
        </Router>
  );
}
