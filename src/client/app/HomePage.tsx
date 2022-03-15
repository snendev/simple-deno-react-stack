/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from "../../deps/react.ts";
import { Link } from "../../deps/react-router-dom.tsx";

import Page from "./Page.tsx"

export default function HomePage() {
  return (
    <Page header={<h1>Hello world!</h1>}>
      {/* React-router Links only re-render the parts of your app that need to change when you navigate to a route! */}
      {/* This avoids re-fetching the document from the server and re-rendering unnecessary parts of the app. */}
      <Link to="/bird">See a bird</Link>
    </Page>
  )
}
