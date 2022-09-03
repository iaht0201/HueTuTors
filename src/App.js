import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ServiceTutor from "./pages/dich-vu-cua-chung-toi";
import Category from "./pages/category";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dich-vu-cua-chung-toi" element={<ServiceTutor />} />
        <Route path="contact" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
