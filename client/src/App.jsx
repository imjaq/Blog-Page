import React, { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

const App = () => {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user? <Home/> : <Register />} />

        <Route path="/login" element={user? <Home/> :<Login />} />
        <Route path="/write" element={user?<Write />: <Login/>} />

        <Route path="/settings" element={user?<Settings />: <Login/>} />

        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
