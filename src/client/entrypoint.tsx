/** @jsx React.createElement */
/// <reference lib="dom" />
import React from "../deps/react.ts";
import ReactDOM from "../deps/react-dom.ts";
import { BrowserRouter } from "../deps/react-router-dom.tsx";

import App from "./App.tsx";

// This entrypoint is what the HTML requests in /src/client/server/Html.tsx
// It is the application entrypoint for the browser.
// Usage of React 18's hydrateRoot enables upgrades like selective hydration.
// See https://github.com/reactwg/react-18/discussions/37#discussion-3397355

const root = ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
