"use client";
import React from "react";
interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log("error :-", error);
  return (
    <>
      <div>An unexpected error has occured.</div>
      <button className="btn btn-success" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
