import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Countries from "./countries/Countries";
import NotFound from "./not_found/NotFound";
import Header from "./header/Header";
import Country from "./country/Country";
import "./main_style.css";

const MyPages = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:country" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MyPages;
