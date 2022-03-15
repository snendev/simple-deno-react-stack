/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from "../../deps/react.ts";
import { Link } from "../../deps/react-router-dom.tsx"

// Page is a useful type of component often referred to as a _presentational_ component.
// Its only concern is to organize subcomponents into a particular layout for the screen.
// It is useful to write components that concern themselves with as few things as possible.
// In this case, Page only defines how the page layout looks, and relevant submodules are passed as props.
interface PageProps {
  children: React.ReactNode
  header: React.ReactNode
}

export default function Page({
  children,
  header,
}: PageProps) {
  return (
    <div>
      { /* Using semantic HTML tags is very useful for making robust web documents! https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning */ }
      <header>
        {header}
        <Link to="/">Home</Link>
      </header>
      {/* This could also be a good place to apply styles and classes! */}
      <div>
        {children}
      </div>
    </div>
  )
}
