import React from "react";

export default function Cart({w="16",h="16"}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={h}
    fill="none"
  
    viewBox="0 0 16 16"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.333 2H2.82a.667.667 0 01.667.493L5.4 9.68a1.333 1.333 0 001.267.987h4.353a1.334 1.334 0 001.267-.914l1.4-4.206a.666.666 0 00-.614-.88H4.067"
    ></path>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6.66 13.333h.013M10.66 13.333h.014"
    ></path>
  </svg>
  );
}
