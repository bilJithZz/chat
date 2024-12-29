import React from "react";
import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import Footer from "./Home/Footer";
import Create from "./Home/Create/Create";
import { Route, Routes } from "react-router-dom";
import Post from "./Home/Post/Post";
import Login from "./Login/Login";
import Register from "./Register/Register";

const App = () => {
  return (
    <div className="w-10/12 px-16 bg-slate-200 m-auto">
      <div className=" m-auto bg-white">
        <div className="px-14">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/create" element={<Create />} />
            <Route path='/post/:id' element={<Post/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register'element={<Register/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
