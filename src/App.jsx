import Login from "./components/login";
import Register from "./components/register";
import Account from "./components/account";
import { Routes , Route } from "react-router-dom";
// import { useState } from "react";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import About from "./Pages/About";




function App() {

  

  return (
    <div>
      <Header/>
      <Routes>
          <Route path="/reg"   element={<Register/>}/>
          <Route path="/login"  element={ <Login/>}/>
          <Route path="/acc"  element={<Account/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
