import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Countries from "./countries/Countries";
import NotFound from "./not_found/NotFound";
import Header from "./header/Header";
import Country from "./country/Country";
import "./main_style.css";
import { ReadMore, GetInfo, SendMessage } from "./about/OtherAbout";

const MyPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="readmore" element={<ReadMore />} />
            <Route path="getinfo" element={<GetInfo />} />
            <Route path="sendmessage" element={<SendMessage />} />
          </Route>
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:country" element={<Country />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MyPages;
