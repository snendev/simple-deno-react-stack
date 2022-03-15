/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from "../../deps/react.ts";

// ImageProps defines the "props" that can be passed to any instance of this component
// When props change in a parent component and that parent re-renders, this component will re-render with the new values
interface ImageProps {
  // The resource name
  assetName: string
  // An optional height value in pixels; defaults to 100%
  height?: number
  // An optional width value in pixels; defaults to 100%
  width?: number
}

export default function Image({
  assetName,
  width,
  height,
}: ImageProps): JSX.Element {
  return (
    <img
      src={`/assets/${assetName}.jpg`}
      height={height ?? "100%"}
      width={width ?? "100%"}
    />
  );
}
