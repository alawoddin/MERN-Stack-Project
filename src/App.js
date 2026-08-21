import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<User />} /> */}
        <Route path="/" element={<Users />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;