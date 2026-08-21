import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <MainNavigation />
          {/* <Route path="/" element={<User />} /> */}
        <Route path="/" element={<Users />} />
        <Route path="/new/place" element={<NewPlace />} />
        
      </Routes>

    </BrowserRouter>
  );
};

export default App;