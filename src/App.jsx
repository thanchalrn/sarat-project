import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prologue from "./pages/Prologue";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";
import Six from "./pages/Six";
import Seven from "./pages/Seven";
import Eight from "./pages/Eight";
import Nine from "./pages/Nine";
import Ten from "./pages/Ten";

import './index.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prologue />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/nine" element={<Nine />} />
        <Route path="/ten" element={<Ten />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
