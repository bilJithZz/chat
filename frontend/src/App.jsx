import React from "react";
import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import Footer from "./Home/Footer";
import Create from "./Home/Create/Create";
import { Route, Routes } from "react-router-dom";
import Post from "./Home/Post/Post";

const App = () => {
  return (
    <div className="w-10/12 px-16 bg-slate-200 m-auto">
      <div className=" m-auto bg-white">
        <div className="px-14">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/create" element={<Create />} />
            <Route path='/post' element={<Post/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
