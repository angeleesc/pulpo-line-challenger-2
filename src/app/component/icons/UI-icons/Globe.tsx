import React from "react";

export default function Globe() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 22c2.21 0 4-4.477 4-10S14.21 2 12 2 8 6.477 8 12s1.79 10 4 10z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 16c5.523 0 10-1.79 10-4s-4.477-4-10-4S2 9.79 2 12s4.477 4 10 4z"
      ></path>
    </svg>
  );
}
