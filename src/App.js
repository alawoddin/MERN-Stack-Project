import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<User />} /> */}
        <Route path="/" element={<Users />} />
        <Route path="/new/place" element={<NewPlace />} />
        
      </Routes>

    </BrowserRouter>
  );
};

export default App;