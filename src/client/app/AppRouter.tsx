/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from "../../deps/react.ts";
import { Route, Routes } from "../../deps/react-router-dom.tsx";

import HomePage from "./HomePage.tsx";
import Image from "./Image.tsx";
import Page from "./Page.tsx"

export default function AppRouter() {
  return (
    // React-router "Routes" enable dynamically rendering according to the current URL on both server and client.
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/bird"
        element={
          <Page
            header={<h1>Bird!</h1>}
          >
            <Image assetName="bird" />
          </Page>
        }
      />
    </Routes>
  );
}
