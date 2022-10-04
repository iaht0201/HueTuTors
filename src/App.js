import "./App.css";
import "./scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ServiceTutor from "./pages/dich-vu-cua-chung-toi";
import Category from "./pages/category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
