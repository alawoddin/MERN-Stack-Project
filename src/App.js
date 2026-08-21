import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./user/pages/User";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;