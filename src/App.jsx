import Login from "./components/login";
import Register from "./components/register";
import './App.css'
import Account from "./components/account";
import { Routes , Route } from "react-router-dom";
// import { useState } from "react";
import Home from "./components/Home/Home";




function App() {

  const loggedin = window.localStorage.getItem('loggedIn')

  return (
    <div>
      <Routes>
          <Route path="/reg"   element={<Register/>}/>
          <Route path="/"  element={loggedin === true ? <Account/> : <Login/>}/>
          <Route path="/acc"  element={<Account/>} />
          <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
