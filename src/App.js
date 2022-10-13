import "./App.css";
import "./scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ServiceTutor from "./pages/dich-vu-cua-chung-toi";
import Category from "./pages/category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TutorsDetail from "./pages/gia-su";
import Login from "./pages/login";
import Signup from "./pages/signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="dich-vu/:id" element={<ServiceTutor />} />
        <Route path="gia-su/:userId" element={<TutorsDetail />} />
        {/* <Route path="dich-vu-cua-chung-toi/:id" element={<ServiceTutor />} /> */}
        <Route path="contact" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
