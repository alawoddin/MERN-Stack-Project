import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />

      <main>
        <Routes>
          {/* <Route path="/" element={<User />} /> */}
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/new/place" element={<NewPlace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
