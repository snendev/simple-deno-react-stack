/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from "../../deps/react.ts";

import type { DBData } from "../../types.ts"

import Page from "./Page.tsx";
import readJsonAPI from "./api/readJsonAPI.ts"

export default function DataPage() {
  const data = readJsonAPI<DBData[]>("data")

  return (
    <Page header={<h1>Data!</h1>}>
      <React.Suspense fallback={<div>...</div>}>
        <ul>
          {data.map(({ label, value }) => (
            <li>
              {label}
              -{' '}
              {value}
            </li>
          ))}
        </ul>
      </React.Suspense>
    </Page>
  );
}
