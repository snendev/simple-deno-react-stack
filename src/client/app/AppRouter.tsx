/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from "../../deps/react.ts";
import { Route, Routes } from "../../deps/react-router-dom.tsx";

import HomePage from "./HomePage.tsx";
import BirdPage from "./BirdPage.tsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/bird"
        element={<BirdPage />}
      />
    </Routes>
  );
}
