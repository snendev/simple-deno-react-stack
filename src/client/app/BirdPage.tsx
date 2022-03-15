/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from "../../deps/react.ts";

import Image from "./Image.tsx";
import Page from "./Page.tsx";

export default function BirdPage() {
  const [showBird, setShowBird] = React.useState(false)

  return (
    <Page header={<h1>Bird!</h1>}>
      <button onClick={() => setShowBird((prevState) => !prevState)}>
        {showBird ? "Hide bird" : "Show Bird???"}
      </button>
      {showBird ? (
        <Image assetName="bird" />
      ) : null}
    </Page>
  );
}
