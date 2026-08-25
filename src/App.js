import React, { useState, useCallback } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  // Logout
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      <Router>

        {/* Navigation */}
        <MainNavigation />

        <main>

          {isLoggedIn ? (
            // =========================
            // LOGGED IN
            // =========================
            <Routes>

              {/* Users */}
              <Route
                path="/"
                element={<Users />}
              />

              {/* New Place */}
              <Route
                path="/places/new"
                element={<NewPlace />}
              />

              {/* User Places */}
              <Route
                path="/:userId/places"
                element={<UserPlaces />}
              />

              {/* Update Place */}
              <Route
                path="/places/:placeId"
                element={<UpdatePlace />}
              />

              {/* Unknown URL */}
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />

            </Routes>
          ) : (
            // =========================
            // LOGGED OUT
            // =========================
            <Routes>

              {/* Users */}
              <Route
                path="/"
                element={<Users />}
              />

              {/* User Places */}
              <Route
                path="/:userId/places"
                element={<UserPlaces />}
              />

              {/* Authentication */}
              <Route
                path="/auth"
                element={<Auth />}
              />

              {/* Unknown URL */}
              <Route
                path="*"
                element={<Navigate to="/auth" replace />}
              />

            </Routes>
          )}

        </main>

      </Router>
    </AuthContext.Provider>
  );
};

export default App;