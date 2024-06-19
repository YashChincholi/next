"use client";
import React from "react";

const Button = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Button;
